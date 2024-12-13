'use client'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { updatePassword } from '@/lib/actions/user.actions'
import { signInDefaultValues } from '@/lib/constants'
import { updatePasswordSchema } from '@/lib/validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { hash } from 'bcrypt-ts-edge'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const PasswordForm = () => {
  const { data: session, update } = useSession()
  const form = useForm<z.infer<typeof updatePasswordSchema>>({
    resolver: zodResolver(updatePasswordSchema),
    defaultValues: {
      password: session?.user.name!,
      email: session?.user.email!,
    },
  })
  const { toast } = useToast()

  // Change Password
  async function onSubmit(values: z.infer<typeof updatePasswordSchema>) {
    const hashedPassword = await hash(values.password, 10)

    const res = await updatePassword({ ...values, password: hashedPassword })

    if (!res.success)
      return toast({
        variant: 'destructive',
        description: res.message,
      })

    await update({
      ...session,
      user: {
        ...session?.user,
        password: hashedPassword,
      },
    })

    toast({
      description: res.message,
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    disabled
                    placeholder="Email"
                    {...field}
                    className="input-field"
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
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Password"
                    {...field}
                    className="input-field"
                    type="password"
                    defaultValue={signInDefaultValues.password}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="button col-span-2 w-full"
        >
          {form.formState.isSubmitting ? 'Submitting...' : 'Change Password'}
        </Button>
      </form>
    </Form>
  )
}

export default PasswordForm
