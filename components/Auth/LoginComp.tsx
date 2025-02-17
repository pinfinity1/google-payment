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
import { loginUser } from "@/api/auth";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const loginFormSchema = z.object({
  email: z.string().email(),
  password: passwordSchema,
});

export default function LoginComp() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    mutateAsync: sendLoginForm,
    isPending,
    isError,
  } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log("Login successful:", data);
    },
    onError: (error: Error) => {
      console.error("Login error:", error.message);
    },
  });

  const loginSubmit = async (data: z.infer<typeof loginFormSchema>) => {
    try {
      const result = await sendLoginForm(data);
      console.log("Login successful:", result);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Login error:", error.message);
      } else {
        console.error("Login error:", "An unknown error occurred");
      }
    }
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
            className={"w-full flex flex-col lg:flex-row items-center gap-5"}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className={"w-full xl:w-1/2 text-left"}>
                  <FormLabel>Emailِ</FormLabel>
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
            <CustomButton type={"submit"}>
              {isPending ? "..." : "Log in"}
            </CustomButton>
            <CustomButton href={"/auth/signup"}>Sign Up</CustomButton>
          </div>
        </form>
      </Form>
    </>
  );
}
