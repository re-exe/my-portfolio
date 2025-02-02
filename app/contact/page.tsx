'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form';

import { Toaster, toast } from 'sonner';

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        description: '(+81) 90 1272 5383',
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: 'amagami.dev@gmail.com',
    },
];

const FormSchema = z.object({
    firstname: z.string().min(1, 'Please enter your first name.'),
    lastname: z.string().min(1, 'Please enter your last name.'),
    email: z.string().email('Please enter a valid Email.'),
    phone: z.string().min(6, 'Please enter your phone number.'),
    subject: z.string().min(1, 'Please enter the subject.'),
    message: z.string().min(1, 'Please enter your message.'),
});

export default function Contact() {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        },
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    async function onSubmit(values: z.infer<typeof FormSchema>) {
        try {
            setIsSubmitting(true);

            const response = await fetch('/api/send-mailer', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Send failed');
            }

            {/* toast */}
            toast.message('Your message was successfully sent!', {
                description: 'As soon as possible, we will get back to you.',
            });

            form.reset();

        } catch (error: unknown) {
            {/* toast */}
            toast.error('Send failed...', {
                description: 'Please try again.',
            });

            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
            }}
            className='py-6'
        >
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-[30px]'>
                    {/* form */}
                    <div className='xl:w-[60%] order-2 xl:order-none'>
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className='flex flex-col gap-6 p-5 bg-[#27272c] rounded-xl'
                            >
                                <h3 className='text-4xl text-accent font-semibold'>Let&apos;s work together!</h3>
                                <p className='text-white/60'>We also welcome requests for website production!</p>

                                {/* input */}
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    <FormField
                                        control={form.control}
                                        name='firstname'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input placeholder='FirstName' {...field}/>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name='lastname'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input placeholder='LastName' {...field}/>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name='email'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input placeholder='Your email address' {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name='phone'
                                        render={({ field }) => (
                                            <FormItem className='items-center'>
                                                <FormControl>
                                                    <Input placeholder='Phone Number' {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {/* select */}
                                <FormField
                                    control={form.control}
                                    name='subject'
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a service" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="General">General request</SelectItem>
                                                <SelectItem value="Production">Production request</SelectItem>
                                                <SelectItem value="Consulting">Consulting request</SelectItem>
                                                <SelectItem value="Other">Other request</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />

                                {/* textarea */}
                                <FormField
                                    control={form.control}
                                    name='message'
                                    render={({ field }) => (
                                        <FormControl>
                                            <Textarea
                                                className='h-[150px]'
                                                placeholder='Type your message here.'
                                                {...field}
                                            />
                                        </FormControl>
                                    )}
                                />

                                {/* button */}
                                <Toaster
                                    toastOptions={{
                                        className: 'bg-primary text-white',
                                    }}
                                    position="top-center"
                                />
                                <Button
                                    type='submit'
                                    variant='outline'
                                    size='lg'
                                    className='w-full flex flex-auto text-center'
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Send now' : 'Send message'}
                                </Button>
                            </form>
                        </Form>
                    </div>

                    {/* info */}
                    <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
                        <ul className='flex flex-col gap-10'>
                            {info.map((item, index) => (
                                <li key={index} className='flex items-center gap-6'>
                                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-full flex items-center justify-center'>
                                        <div className='text-[28px]'>{item.icon}</div>
                                    </div>
                                    <div className='flex-1'>
                                        <p className='text-white/60'>{item.title}</p>
                                        <h3 className='text-xl'>{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}