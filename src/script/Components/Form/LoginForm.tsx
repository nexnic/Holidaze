// Import 
    // React 
    import { useForm } from "react-hook-form";
    // Yup
        import { yupResolver } from "@hookform/resolvers/yup";
        import * as yup from "yup";

// Type 
    type FormValues = {
        email:string,
        Password:string,
    } 

    const schema = yup.object({
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
            )
    })

    interface IData {
        data:string;
        email:string;
        Password: string|number
    }

export default function LoginForm(){
    const form = useForm<FormValues>({
        defaultValues: {
            email: "",
            Password: "",
        },
        resolver: yupResolver(schema)
    })
    const {register, handleSubmit, formState} = form
    const {errors} = formState

    const onSubmit = async (data:IData) => {
        const {email, Password:password} = data
        const user = {email, password}
       try {
            const fetchReq = await fetch('https://api.noroff.dev/api/v1/holidaze/auth/login', {
                method:'POST',
                headers: {
                    'Content-type': 'application/json; charset=UFT-8',
                },
                body:JSON.stringify(user)
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
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email"  className="form-control" {...register('email')}/>
                <p style={{color: 'white'}}>{errors.email?.message}</p>
            </div>
            <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input type="password"  className="form-control" {...register('Password')}/>
                <p style={{color: 'white'}}>{errors.Password?.message}</p>
            </div>
            <div className="form-group">
                <div className="form-check">
                    <input type="checkbox"  className="form-check-input" />
                    <label className="form-check-label" htmlFor="dropdownCheck">
                        Remember Me
                    </label>
                </div>
            </div>
            <button>Submit</button>
        </form>
    )
}