interface IProfileImage {
    Avatar: string,
}

export default function ProfileImage ({Avatar}:IProfileImage){
    const avatar = Avatar
    console.log(avatar)
    return (
        <div>
            <div style={{position: 'relative', padding: '0', cursor: 'pointer'}}>
                <img className="rounded-circle shadow-4-strong" alt="avatar2" style={{width: '140px', height: '140px'}} src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" />
            </div>
        </div>
    )
}