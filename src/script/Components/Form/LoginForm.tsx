// Import 
    // React 
    import { useForm } from "react-hook-form";
    // Yup
        import { yupResolver } from "@hookform/resolvers/yup";
        import * as yup from "yup";

// Type 
    type FormValues = {
        email:string
        password:string
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