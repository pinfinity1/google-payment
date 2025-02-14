import CustomButton from "@/components/common/CustomButton";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {passwordSchema} from "@/validation/passwordSchema";


const loginFormSchema = z.object({
    email: z.string().email(),
    password: passwordSchema
})


export default function LoginComp () {
    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })
    
    const loginSubmit = async (data: z.infer<typeof loginFormSchema>) => {
        console.log(data);
    }
    
    
    return (
        <>
            <h3 className={"text-pr-green-60 text-[28px] mb-3"}>Login</h3>
            <p className={"font-extralight text-grey-shade-75"}>Welcome back! Please log in to access your
                account.
            </p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(loginSubmit)} className="relative w-full space-y-8 pt-8 z-10">
                    <div className={"w-full flex flex-col lg:flex-row items-center gap-5"}>
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
                    </div>
                    <div className={"w-full lg:max-w-[400px] mx-auto flex flex-col items-center gap-5 sm:px-20 lg:p-0"}>
                        <CustomButton type={"submit"}>Log in</CustomButton>
                        <CustomButton href={"/auth/signup"}>Sign Up</CustomButton>
                    </div>
                </form>
            </Form>
        </>
    )
}