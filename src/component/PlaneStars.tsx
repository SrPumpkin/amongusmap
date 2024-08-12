import { useThree, useFrame } from "@react-three/fiber"
import {useMemo} from "react";

export default function PlaneStars() {
    const { size, gl} = useThree()
    const ratio = gl.getPixelRatio()

    const uniforms = useMemo(() => {
        return {
            u_time: {
                value: 0.0
            },
            u_resolution: {
                value: [size.width * ratio, size.height * ratio]
            }
        }
    }, [])

    useFrame((state) => {
        const { clock } = state;
        uniforms.u_time.value = clock.getElapsedTime();
    });

    return(
        <mesh>
            <planeGeometry args={[window.innerWidth * 2, window.innerHeight * 2]} />
            <shaderMaterial
                fragmentShader={`
                    // Author @SrPumpkin
                    
                    const float PI = 3.1415926535897932384626433832795;
                    
                    uniform vec2 u_resolution;
                    uniform float u_time;
                    
                    float random (in vec2 st, float _min, float _max) {
                        return fract(sin(dot(st.xy, vec2(10.0,78.0)))* 437508.0) * (_max - _min) + _min;
                    }
                    
                    float circle(vec2 _st, float _radius, vec2 _pos){
                        float radius = random(_pos, 0.02, 0.1);
                        
                        vec2 u_pos = _st - vec2(0.5) + vec2(random(_pos, 0.35, -0.35), random(_pos, 0.35, -0.35));
                        return smoothstep(1.0 - radius, 1.0 - radius + radius * 0.5, 0.934 - dot(u_pos, u_pos) * PI);;
                    }
                    
                    void main() {
                        vec2 st = gl_FragCoord.xy/u_resolution.xy;
                        st.x *= u_resolution.x/u_resolution.y;
                    
                        st.x += u_time * 0.4;
                        st *= 10.0;
                        
                        vec2 ipos = floor(st); 
                        vec2 fpos = fract(st); 
                    
                        vec3 color = vec3( circle(fpos, 0.05, ipos) );
                    
                        gl_FragColor = vec4(color,1.0);
                    }
                `}
                uniforms={uniforms}
            />
        </mesh>
    )
}