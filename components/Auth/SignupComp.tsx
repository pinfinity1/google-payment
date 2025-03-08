import React, { useState } from "react";
import CustomButton from "@/components/common/CustomButton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { passwordMatchSchema } from "@/validation/passwordMatchSchema";
import { useMutation } from "@tanstack/react-query";
import { SignupUser } from "@/api/auth";
import { Eye, EyeOff } from "lucide-react";
import {toast} from "@/hooks/use-toast";
import {SignupRequest} from "@/api/types";

const signupFormSchema = z
  .object({
    username: z.string().min(3, "Full Name must contain at least 3 character(s)").max(255),
    email: z.string().email(),
  })
  .and(passwordMatchSchema);

interface SignupCompProps {
    showVerifyOTP:() => void
    // setEmail: (value : string) => void
    setEmail : React.Dispatch<React.SetStateAction<string>>
}

export default function SignupComp({showVerifyOTP ,setEmail}: SignupCompProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState<boolean>(false);

  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const {
    mutate: sendSignupForm,
    isPending,
  } = useMutation({
    mutationFn: SignupUser,
    onSuccess: () => {
        toast({
            description: 'Sing Up successful',
            duration: 3000,
            className: '[&>button]:hidden',
        });
        setEmail(form.getValues().email);
        showVerifyOTP();
    },
    onError: () => {
        toast({
            description: 'Email or Username Exist',
            variant: "destructive",
            duration: 3000,
            className: '[&>button]:hidden',
        });
    },
  });

  const signupSubmit = async (data: z.infer<typeof signupFormSchema>) => {
    const signupValue : SignupRequest = {
        username : data.username,
        email: data.email,
        password : data.password
    }
    sendSignupForm(signupValue)
  };

  return (
    <>
      <h3 className={"text-pr-green-60 text-[28px] mb-3"}>Sign Up</h3>
      <p className={"font-extralight text-grey-shade-75"}>
        Join our community today! Create an account to unlock exclusive features
        and personalized experiences.
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(signupSubmit)}
          className="relative w-full space-y-5 pt-8 z-10"
        >
          <div className={"w-full grid grid-cols-1 lg:grid-cols-2 gap-5"}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className={"w-full text-left"}>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type={"text"}
                      placeholder="Enter your Username"
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
              name="email"
              render={({ field }) => (
                <FormItem className={"w-full text-left"}>
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
          </div>
          <div className={"w-full grid grid-cols-1 lg:grid-cols-2 gap-5"}>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className={"w-full text-left"}>
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
            <FormField
              control={form.control}
              name="passwordConfirm"
              render={({ field }) => (
                <FormItem className={"w-full text-left"}>
                  <FormLabel>Password Confirm</FormLabel>
                  <FormControl>
                    <div className={"relative"}>
                      <Input
                        {...field}
                        type={showPasswordConfirm ? "text" : "password"}
                        placeholder="Confirm Your Password"
                        className={
                          "w-full p-4 text-base bg-grey-shade-10 rounded-xl placeholder:text-grey-shade-35 border border-grey-shade-15 focus:outline-none tracking-wide"
                        }
                      />
                      <span
                        onClick={() => setShowPasswordConfirm((prev) => !prev)}
                        className="group absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                      >
                        {showPasswordConfirm ? (
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
                {isPending ? "Signing up..." : "Sing up"}
            </CustomButton>
            <CustomButton href={"/auth/login"}>Login</CustomButton>
          </div>
        </form>
      </Form>
    </>
  );
}
