// Author @patriciogv - 2015 - patricio.io

#ifdef GL_ES
precision mediump float;
#endif

const float PI = 3.1415926535897932384626433832795;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float random (vec2 st) {
    return fract( sin( dot(st.xy, vec2(12.9898,78.233)) ) * 43758.5453123);
}

vec2 movingTiles(vec2 _st, float _zoom, float _speed){
    _st *= _zoom;
    float time = u_time*_speed;
    _st.x += fract(time)*1.0;
    return fract(_st);
}

float circle(vec2 _st, float _radius){
    vec2 pos = vec2(0.5, 0.5) - _st;
    return smoothstep(1.312 - _radius, 1.192 - _radius + _radius * 0.056, 1.000 - dot(pos,pos) * 3.14);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;

    st = movingTiles(vec2(st), 1.0, 1.0);

    vec3 color = vec3( 1.0-circle(st, 0.316 ) );

    gl_FragColor = vec4(color,1.0);
}