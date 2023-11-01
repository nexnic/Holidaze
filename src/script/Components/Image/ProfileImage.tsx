import Load from "../../Storage/Load";

export default function ProfileImage (){
    const GetProfileImage = Load('userData')
        const {avatar } = GetProfileImage
        if(avatar) return avatar
        if(!avatar) return 'https://github.com/nexnic/Sosial_media/blob/master/public/image/default-Profile.png'
}