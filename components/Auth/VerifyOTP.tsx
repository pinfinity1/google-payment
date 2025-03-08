import React from "react";
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {Form, FormControl, FormField, FormItem, FormMessage,} from "@/components/ui/form"
import {InputOTP, InputOTPGroup, InputOTPSlot,} from "@/components/ui/input-otp"
import {toast} from "@/hooks/use-toast";
import CustomButton from "@/components/common/CustomButton";


const FormSchema = z.object({
    pin: z.string().min(6, {
        message: "Your verification code must be 6 characters.",
    }),
})


interface VerifyOTPProps {
    email: string;
}

export const VerifyOTP: React.FC<VerifyOTPProps> = ({email}) => {
    
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            pin: "",
        },
    })
    
    function onSubmit (data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
            ),
        })
    }
    
    return (
        <div className={"w-full space-y-8 p-5"}>
            <div className={"text-sm leading-6"}>
                <p>To ensure the security of your account, we've sent a verification code to your email</p>
                <span className={"text-pr-green-60 underline"}>{email}</span>
                <p>Please enter it to confirm your identity.</p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 flex flex-col items-center">
                    <FormField
                        control={form.control}
                        name="pin"
                        render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <InputOTP maxLength={6} {...field}>
                                        <InputOTPGroup className={"flex items-center justify-center text-white "}>
                                            <InputOTPSlot index={0}
                                                          className={"w-14 h-14 bg-grey-shade-15 text-lg ring-pr-green-95 caret-transparent"}/>
                                            <InputOTPSlot index={1}
                                                          className={"w-14 h-14 bg-grey-shade-15 text-lg ring-pr-green-95"}/>
                                            <InputOTPSlot index={2}
                                                          className={"w-14 h-14 bg-grey-shade-15 text-lg ring-pr-green-95"}/>
                                            <InputOTPSlot index={3}
                                                          className={"w-14 h-14 bg-grey-shade-15 text-lg ring-pr-green-95"}/>
                                            <InputOTPSlot index={4}
                                                          className={"w-14 h-14 bg-grey-shade-15 text-lg ring-pr-green-95"}/>
                                            <InputOTPSlot index={5}
                                                          className={"w-14 h-14 bg-grey-shade-15 text-lg ring-pr-green-95"}/>
                                        </InputOTPGroup>
                                    </InputOTP>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    
                    <div className={"w-[120px]"}>
                        <CustomButton type={"submit"}>
                            Verify
                        </CustomButton>
                    </div>
                </form>
            </Form>
        </div>
    )
}