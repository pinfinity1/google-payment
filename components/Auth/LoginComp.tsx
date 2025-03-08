import CustomButton from "@/components/common/CustomButton";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { passwordSchema } from "@/validation/passwordSchema";
import { useMutation } from "@tanstack/react-query";
import {LoginUser} from "@/api/auth";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import {toast} from "@/hooks/use-toast";

const loginFormSchema = z.object({
  email: z.string().email(),
  password: passwordSchema,
});

interface LoginCompProps {
    showVerifyOTP:() => void
    // setEmail: (value : string) => void
    setEmail : React.Dispatch<React.SetStateAction<string>>
}

export default function LoginComp({showVerifyOTP , setEmail} : LoginCompProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    mutate: sendLoginForm,
    isPending,
  } = useMutation({
    mutationFn: LoginUser,
    onSuccess: (data) => {
        toast({
            title: "Login successfully",
            description: data.message,
        });
        setEmail(form.getValues().email);
        // console.log(form.getValues().email);
        showVerifyOTP();
    },
    onError: () => {
        toast({
            description: "Failed to login",
            variant: "destructive",
            duration: 3000,
            className: '[&>button]:hidden',
        });
        
    },
  });

  const loginSubmit =  (data: z.infer<typeof loginFormSchema>) => {
     sendLoginForm(data)
  };

  return (
    <>
      <h3 className={"text-pr-green-60 text-[28px] mb-3"}>Login</h3>
      <p className={"font-extralight text-grey-shade-75"}>
        Welcome back! Please log in to access your account.
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(loginSubmit)}
          className="relative w-full space-y-8 pt-8 z-10"
        >
          <div
            className={"w-full flex flex-col lg:flex-row gap-5 sm:px-20 lg:p-0"}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className={"w-full xl:w-1/2 text-left"}>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type={"email"}
                      placeholder="Enter your Email"
                      className={
                        "w-full p-4 text-base bg-grey-shade-10 rounded-xl placeholder:text-grey-shade-35 border border-grey-shade-15 focus:outline-none tracking-wide"
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className={"w-full xl:w-1/2 text-left"}>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className={"relative"}>
                      <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your Password"
                        className={
                          "w-full p-4 text-base bg-grey-shade-10 rounded-xl placeholder:text-grey-shade-35 border border-grey-shade-15 focus:outline-none tracking-wide"
                        }
                      />
                      <span
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="group absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                      >
                        {showPassword ? (
                          <Eye className="h-5 w-5 text-pr-green-60" />
                        ) : (
                          <EyeOff className="h-5 w-5 text-grey-shade-35 group-hover:text-pr-green-60" />
                        )}
                      </span>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div
            className={
              "w-full lg:max-w-[400px] mx-auto flex flex-col items-center gap-5 sm:px-20 lg:p-0"
            }
          >
            <CustomButton type={"submit"} disabled={isPending}>
              {isPending ? "Logging in..." : "Log in"}
            </CustomButton>
            <CustomButton href={"/auth/signup"}>Sign Up</CustomButton>
          </div>
        </form>
      </Form>
    </>
  );
}
