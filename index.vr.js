import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Model,
  AmbientLight,
  PointLight,
} from 'react-vr';
import Walk from 'react-vr-walk'



export default class HelloReactVR extends React.Component {
  render() {
    window.addEventListener("gamepadconnected", function(e) {
      alert("Gamepad connected at index %d: %s. %d buttons, %d axes.",
        e.gamepad.index, e.gamepad.id,
        e.gamepad.buttons.length, e.gamepad.axes.length);
    });

    return (
      <Walk panoSource={asset('chess-world.jpg')}>
        <AmbientLight intensity={0.3} />
        <PointLight style={{transform: [{translate: [0, -100, -100]}]}} />
        <Text
          style={{
            backgroundColor: 'transparent',
            color: 'black',
            fontSize: 1,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -2]}, {rotateX: 0}],
          }}>
          OTR
        </Text>
        <Model
          lit
          materialParameters={{ color: 0x99ff99 }}
          source={{ obj: asset('monkey.obj') }}
          style={{transform: [{translate: [3, 0, 3]}, {rotateZ: 180}, {rotateY: 140}, {rotateX: 0}]}}
        />
        <Model
          lit
          materialParameters={{ color: 0xf27777 }}
          source={{ obj: asset('monkey.obj') }}
          style={{transform: [{translate: [0, 0, 3]}, {rotateZ: 180}, {rotateY: 180}, {rotateX: 0}]}}
        />
        <Model
          lit
          materialParameters={{ color: 0x99ccff }}
          source={{ obj: asset('monkey.obj') }}
          style={{transform: [{translate: [-3, 0, 3]}, {rotateZ: 180}, {rotateY: 225}, {rotateX: 0}]}}
        />
      </Walk>
    );
  }
};

AppRegistry.registerComponent('HelloReactVR', () => HelloReactVR);
