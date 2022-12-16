import { View } from "react-native"
import ImageViewer from "./ImageViewer"

const Francia1 = require('../assets/fr1.jpg');
const Francia2 = require('../assets/fr2.jpg');
const Francia3 = require('../assets/fr3.jpg');

export default function ViewTeam(){
return(
<View style = {styles.imageContainer}> 
    <ImageViewer placeholderImageSource={Francia1} />
    <ImageViewer placeholderImageSource={Francia2} />
    <ImageViewer placeholderImageSource={Francia3} />
  </View>
    )
}