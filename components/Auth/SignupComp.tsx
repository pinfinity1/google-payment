import CustomButton from "@/components/common/CustomButton";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {passwordMatchSchema} from "@/validation/passwordMatchSchema";


const signupFormSchema = z.object({
    name: z.string().min(3).max(255),
    email: z.string().email(),
}).and(passwordMatchSchema)


export default function SignupComp () {
    const form = useForm<z.infer<typeof signupFormSchema>>({
        resolver: zodResolver(signupFormSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            passwordConfirm: "",
        }
    })
    
    const signupSubmit = async (data: z.infer<typeof signupFormSchema>) => {
        console.log(data);
    }
    
    
    return (
        <>
            <h3 className={"text-pr-green-60 text-[28px] mb-3"}>Sign Up</h3>
            <p className={"font-extralight text-grey-shade-75"}>
                Join our community today! Create an account to unlock
                exclusive features and personalized experiences.
            </p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(signupSubmit)} className="relative w-full space-y-8 pt-8 z-10">
                    <div className={"w-full flex flex-col lg:flex-row items-center gap-5"}>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({field}) => (
                                <FormItem className={"w-full xl:w-1/2 text-left"}>
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
                            name="email"
                            render={({field}) => (
                                <FormItem className={"w-full xl:w-1/2 text-left"}>
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
                    <div className={"w-full flex flex-col lg:flex-row items-center gap-5"}>
                        <FormField
                            control={form.control}
                            name="password"
                            render={({field}) => (
                                <FormItem className={"w-full xl:w-1/2 text-left"}>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input {...field} type={"password"} placeholder="Enter your Password"
                                               className={"w-full p-4 text-base bg-grey-shade-10 rounded-xl placeholder:text-grey-shade-35 border border-grey-shade-15 focus:outline-none tracking-wide"}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="passwordConfirm"
                            render={({field}) => (
                                <FormItem className={"w-full xl:w-1/2 text-left"}>
                                    <FormLabel>Password Confirm</FormLabel>
                                    <FormControl>
                                        <Input {...field} type={"password"} placeholder="Enter your Password"
                                               className={"w-full p-4 text-base bg-grey-shade-10 rounded-xl placeholder:text-grey-shade-35 border border-grey-shade-15 focus:outline-none tracking-wide"}/>
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