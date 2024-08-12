import {useFrame, useLoader, Vector3} from "@react-three/fiber";
import {useMemo} from "react";
import {TextureLoader, DoubleSide} from "three";
import {useAppSelector} from "../storage/hooks/hooks";

interface Coords {
    x: number,
    y: number
}

interface Props {
    pos: Coords,
    texture: string,
    size: number
}

export default function Engine({pos, texture, size}: Props) {
    const globalSettings = useAppSelector(state => state.settings)

    const spriteTexture = useLoader(TextureLoader, texture)
    const spriteSize = {
        width: spriteTexture.source.data.width,
        height: spriteTexture.source.data.height,
    }

    const uniforms = useMemo(() => {
        return {
            u_time: {
                value: 0.0
            },
            u_sprite: {
                value: spriteTexture
            },
            u_spriteResolution: {
                value: [spriteSize.width, spriteSize.height]
            }
        }
    }, [])

    useFrame((state) => {
        const { clock } = state;
        uniforms.u_time.value = clock.getElapsedTime();
    });

    const adaptiveSize = globalSettings.height / 1000

    return(
        <mesh position={[pos.x * globalSettings.height / 100, pos.y * globalSettings.height / 100, 0]}>
            <planeGeometry args={[spriteSize.width / 4 * adaptiveSize * size, spriteSize.height * adaptiveSize * size]} />
            <shaderMaterial
                fragmentShader={`
                    // Author @SrPumpkin
                    
                    uniform sampler2D u_sprite;
                    uniform vec2 u_spriteResolution;
                    
                    int col = 4;
                    int row = 1;
                    
                    varying vec2 vUv;
                    uniform float u_time;
                    
                    void main() {
                        vec2 st = vUv;
                        vec4 color = vec4(0.0);
                    
                        // Resolution of one frame
                        vec2 fRes = u_spriteResolution / vec2(float(col),1.0);
                    
                        // Normalize value of the frame resolution
                        vec2 nRes = u_spriteResolution / fRes;
                    
                        // Scale the coordinates to a single frame
                        st = st / nRes;

                        st /= vec2(1.02);
                        st += vec2(1.002, 1.009);
                    
                        // Calculate the offset in cols and rows
                        float timeX = u_time * 8.0;
                        float timeY = floor(timeX / float(col));
                        vec2 offset = vec2( floor(timeX) / nRes.x, 1.0 - (floor(timeY) / nRes.y) );
                        st = fract(st + offset);
                    
                        color = texture2D(u_sprite, st);
                    
                        gl_FragColor = color;
                    }
                `}
                vertexShader={`
                    varying vec2 vUv;
                    void main() {
                        vUv = uv;
                        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
                        vec4 viewPosition = viewMatrix * modelPosition;
                        vec4 projectedPosition = projectionMatrix * viewPosition;
                        
                        gl_Position = projectedPosition;
                    }
                `}
                uniforms={uniforms}
                side={DoubleSide}
                transparent={true}
            />
        </mesh>
    )
}