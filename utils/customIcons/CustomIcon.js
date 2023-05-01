import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';
// export default createIconSetFromIcoMoon(icoMoonConfig);

const CustomIcon = ()=>{
	return(
		<Image
			style={{ width: size, height: size }}
			source=
			'../../assets/icns/icon-ball.svg'
	    />
	)
}

export default CustomIcon

