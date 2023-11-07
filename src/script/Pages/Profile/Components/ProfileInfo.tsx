interface IProfileInfo {
    UserName: string, 
    UserEmail:string, 
}

export default function ProfileInfo ({UserName, UserEmail}:IProfileInfo ){

    return (
        <div>
            <h2>{UserName}</h2>
            <h3>{UserEmail}</h3>
        </div>
    )
}