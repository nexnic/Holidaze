// Import 
    // React 
        import { useForm } from "react-hook-form";
    // Yup
        import { yupResolver } from "@hookform/resolvers/yup";
        import * as yup from "yup";

type FormValues = {
    email:string;
    name:string;
    Password:string;
    Avatar:string;
}

interface IData   {
    data:string
    name:string
    email:string
    Password:string
    Avatar:string
}

const schema = yup.object({
    name: yup
        .string()
        .required('Name is Required'),
    email: yup 
        .string()
        .email('Email Format Is not Valid')
        .required('Email is Required')
        .matches(
            /^[a-z0-9._%+-]+@(stud.noroff.no)$/,
            'You Need A Email and with stud.noroff.no'
        ), 
    Password: yup
        .string()
        .required('Password is Required')
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            'Password must contain at least 8 characters, one uppercase, one number and one special case character'
        ),
    Avatar: yup
        .string().url()

});


export default function RegisterForm () {

    const form = useForm<FormValues>({
        defaultValues: {
            name: "",
            email: "",
            Password: "",
            Avatar:"",
        },
    // @ts-expect-error: TODO
    resolver: yupResolver(schema),
    })

    const {register, handleSubmit, formState} = form
    const {errors} = formState

    
    const onSubmit = async (data:IData) => {
        const {name, email, Password: password, Avatar:avatar} = data
        const Newuser = {name,email, password, avatar}
        console.log(Newuser)
        try {
            const fetchReq = await fetch('https://api.noroff.dev/api/v1/holidaze/auth/register', {
                method:'POST',
                headers: {
                'Content-type': 'application/json; charset=UFT-8',
                }, 
                body:JSON.stringify(Newuser)
            })
            const dataRep = await fetchReq.json()
            console.log(dataRep)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        // @ts-expect-error: TODO
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
                <label htmlFor="email">email</label>
                <input type="text" id="email" {...register("email")} />
                <p className="error">{errors.email?.message}</p>
            </div>
            <div className="form-control">
                <label htmlFor="name">name</label>
                <input type="text" id="name" {...register("name")} />
                <p className="error">{errors.name?.message}</p>
            </div>
            <div className="form-control">
                <label htmlFor="Password">Password</label>
                <input type="text" id="Password" {...register("Password")}/>
                <p className="error">{errors.Password?.message}</p>
            </div>
            <div className="form-control">
                <label htmlFor="Avatar">Avatar</label>
                <input type="text" id="Avatar" {...register("Avatar")}/>
                <p className="error">{errors.Avatar?.message}</p>
            </div>
            <button>Submit</button>
        </form>
    )

}
