import CustomButton from "@/components/common/CustomButton";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {passwordMatchSchema} from "@/validation/passwordMatchSchema";
import {useMutation} from "@tanstack/react-query";
import {signupUser} from "@/api/auth";
import {SuccessAuthResponse} from "@/api/types";
import {useState} from "react";
import {Eye, EyeOff} from "lucide-react";


const signupFormSchema = z.object({
    username: z.string().min(3, "Full Name must contain at least 3 character(s)").max(255),
    displayName: z.string().min(5, "User Name must contain at least 3 character(s)").max(255),
    email: z.string().email(),
}).and(passwordMatchSchema)


export default function SignupComp () {
    const [showPassword, setShowPassword] = useState(false);
    
    const form = useForm<z.infer<typeof signupFormSchema>>({
        resolver: zodResolver(signupFormSchema),
        defaultValues: {
            username: "",
            displayName: "",
            email: "",
            password: "",
            passwordConfirm: "",
        }
    })
    
    const {mutateAsync: sendSignupForm, isPending, isError} = useMutation({
        mutationFn: signupUser,
        onSuccess: (data) => {
            console.log('Login successful:', data);
        },
        onError: (error: Error) => {
            console.error('Login error:', error.message);
        },
    });
    
    const signupSubmit = async (data: z.infer<typeof signupFormSchema>) => {
        const {passwordConfirm, ...signupValue} = data
        try {
            const result: SuccessAuthResponse = await sendSignupForm(signupValue);
            console.log('Login successful:', result);
        } catch (error) {
            if(error instanceof Error) {
                console.error('Login error:', error.message);
            } else {
                console.error('Login error:', 'An unknown error occurred');
            }
        }
    }
    
    
    return (
        <>
            <h3 className={"text-pr-green-60 text-[28px] mb-3"}>Sign Up</h3>
            <p className={"font-extralight text-grey-shade-75"}>
                Join our community today! Create an account to unlock
                exclusive features and personalized experiences.
            </p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(signupSubmit)} className="relative w-full space-y-5 pt-8 z-10">
                    <div className={"w-full grid grid-cols-1 lg:grid-cols-2 gap-5"}>
                        <FormField
                            control={form.control}
                            name="username"
                            render={({field}) => (
                                <FormItem className={"w-full text-left"}>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} type={"text"} placeholder="Enter your Full Name"
                                               className={"w-full p-4 text-base bg-grey-shade-10 rounded-xl placeholder:text-grey-shade-35 border border-grey-shade-15 focus:outline-none tracking-wide"}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="displayName"
                            render={({field}) => (
                                <FormItem className={"w-full text-left"}>
                                    <FormLabel>User Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} type={"text"} placeholder="Enter your User Name"
                                               className={"w-full p-4 text-base bg-grey-shade-10 rounded-xl placeholder:text-grey-shade-35 border border-grey-shade-15 focus:outline-none tracking-wide"}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem className={"w-full text-left"}>
                                    <FormLabel>Emailِ</FormLabel>
                                    <FormControl>
                                        <Input {...field} type={"email"} placeholder="Enter your Email"
                                               className={"w-full p-4 text-base bg-grey-shade-10 rounded-xl placeholder:text-grey-shade-35 border border-grey-shade-15 focus:outline-none tracking-wide"}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className={"w-full grid grid-cols-1 lg:grid-cols-2 gap-5"}>
                        <FormField
                            control={form.control}
                            name="password"
                            render={({field}) => (
                                <FormItem className={"w-full text-left"}>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <div className={"relative"}>
                                            <Input {...field} type={showPassword ? "text" : "password"}
                                                   placeholder="Enter your Password"
                                                   className={"w-full p-4 text-base bg-grey-shade-10 rounded-xl placeholder:text-grey-shade-35 border border-grey-shade-15 focus:outline-none tracking-wide"}/>
                                            <span
                                                onClick={() => setShowPassword(prev => !prev)}
                                                className="group absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                                            >
                                                {showPassword ? (
                                                    <EyeOff
                                                        className="h-5 w-5 text-grey-shade-35 group-hover:text-pr-green-60"/>
                                                ) : (
                                                    <Eye
                                                        className="h-5 w-5 text-grey-shade-35 group-hover:text-pr-green-60"/>
                                                )}
                                            </span>
                                        </div>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="passwordConfirm"
                            render={({field}) => (
                                <FormItem className={"w-full text-left"}>
                                    <FormLabel>Password Confirm</FormLabel>
                                    <FormControl>
                                        <div className={"relative"}>
                                            <Input {...field} type={showPassword ? "text" : "password"}
                                                   placeholder="Confirm Your Password"
                                                   className={"w-full p-4 text-base bg-grey-shade-10 rounded-xl placeholder:text-grey-shade-35 border border-grey-shade-15 focus:outline-none tracking-wide"}/>
                                            <span
                                                onClick={() => setShowPassword(prev => !prev)}
                                                className="group absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                                            >
                                                {showPassword ? (
                                                    <EyeOff
                                                        className="h-5 w-5 text-grey-shade-35 group-hover:text-pr-green-60"/>
                                                ) : (
                                                    <Eye
                                                        className="h-5 w-5 text-grey-shade-35 group-hover:text-pr-green-60"/>
                                                )}
                                            </span>
                                        </div>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    
                    </div>
                    <div className={"w-full lg:max-w-[400px] mx-auto flex flex-col items-center gap-5 sm:px-20 lg:p-0"}>
                        <CustomButton type={"submit"}>Sign Up</CustomButton>
                        <CustomButton href={"/auth/login"}>Login</CustomButton>
                    </div>
                </form>
            </Form>
        
        </>
    )
}