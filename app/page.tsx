'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SiGithub, SiQiita } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';
import Image from 'next/image';

import { skillData } from '@/data/skills';
import { careers } from '@/data/careers';
import { projects } from '@/data/projects';
import { useState } from 'react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(1, "お名前を入力してください。"),
  email: z.string().email("有効なメールアドレスを入力してください。"),
  subject: z.string().min(1, "お問い合わせ項目を選択してください。"),
  message: z.string().min(1, "お問い合わせ内容を入力してください。"),
});

export default function Home() {
  const profileMessage = "ゲームやウェブシステムを制作し、\nほのぼのと世界中のユーザーに感動を届けています。";

  const profileIconSize: number = 200;
  const skillIconSize: number = 64;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-mailer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'メール送信エラー');
      }

      toast.success("送信が完了しました。ありがとうございます！");
      form.reset();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("送信に失敗しました。");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div id='about' className="min-h-screen bg-background">
      <main className="container mx-auto px-4 pt-20">
        <section id="about" className="py-20">
          <div className="flex flex-col items-center space-y-8">
            <Image
              src="/images/profile/profile.png"
              alt="Profile"
              width={profileIconSize}
              height={profileIconSize}
              className="rounded-full border-2 border-blue-400 shadow-lg shadow-gray-500"
            />
            <div className="text-center">
              <h1 className="text-4xl font-bold">amagami</h1>
              <p className="mt-2 text-xl text-muted-foreground">フルスタックエンジニア</p>
            </div>
            <p className="max-w-2xl text-center text-muted-foreground whitespace-pre-wrap">
              {profileMessage}
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/re-exe" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <SiGithub className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://x.com/trrr_te" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <FaXTwitter className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://qiita.com/amagamiii" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <SiQiita className="h-5 w-5" />
                </Button>
              </a>
              <a href="#contact" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <HiOutlineMail className="h-5 w-5" />
              </Button>
              </a>
            </div>
          </div>
        </section>

        <section id='careers' className="py-20 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center mb-2">Career History</h2>
          <p className="text-center text-muted-foreground mb-12">私の経歴をご紹介します。</p>
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-blue-500">
                <h3 className="text-3xl">経歴</h3>
              </div>
            </div>
              <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-600">
                  {careers.sort((a, b) => (a.id - b.id)).map((career) => (
                    <div
                      key={career.id}
                      className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-500">
                      <h3 className="text-xl font-semibold tracking-wide">{career.name}</h3>
                      <p className="text-xs tracking-wide uppercase text-gray-600">{career.time}{career.location}</p>
                      <p className="mt-3 whitespace-pre-wrap">{career.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20">
          <h2 className="container text-3xl font-bold text-center mb-2">My Technical Skills</h2>
          <p className="text-center text-muted-foreground mb-12">私が扱える技術をご紹介します。</p>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {skillData.sort((a, b) => a.id - b.id).map((data) => (
                <div key={data.id} className="flex flex-col items-center space-y-4">
                  <Image
                      src={data.imageUrl}
                      alt={data.name}
                      width={skillIconSize}
                      height={skillIconSize}
                    />
                  <span className="text-sm font-medium">{data.name}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-12">
              フロントエンドだけでなく、バックエンドやCICDの知識も豊富です。
            </p>
          </div>
        </section>

        <section id="projects" className="py-20 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center mb-2">Projects</h2>
          <p className="text-center text-muted-foreground mb-12">私が制作したプロジェクトについてご紹介します。</p>
          <div className="grid grid-cols-1 gap-6">
            {projects.sort((a, b) => (a.id - b.id)).map((project) => (
              <Card key={project.id} className="p-6">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-lg mb-4 border-2 border-blue-400"
                />
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 whitespace-pre-wrap">{project.details}</p>
                <div className="flex space-x-2 items-center">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">詳細はこちら →</Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-1">Contact Us</h2>
          <p className="text-center text-muted-foreground mb-12">制作依頼等のご連絡もお待ちしております！</p>
            <div className="max-w-3xl mx-auto">
              <Card className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>名前</FormLabel>
                          <FormControl>
                            <Input placeholder="山田 太郎" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>メールアドレス</FormLabel>
                          <FormControl>
                            <Input placeholder="mail@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>お問い合わせ項目</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="お問い合わせ項目を選択してください" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="一般的なお問い合わせ">一般的なお問い合わせ</SelectItem>
                              <SelectItem value="制作依頼等のお問い合わせ">制作依頼等のお問い合わせ</SelectItem>
                              <SelectItem value="開発/コンサルティングのお問い合わせ">開発/コンサルティングのお問い合わせ</SelectItem>
                              <SelectItem value="その他">その他</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>お問い合わせ内容</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="お問い合わせ内容を入力してください"
                              className="min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "送信中" : "送信する"}
                    </Button>
                  </form>
                </Form>
              </Card>
            </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="p-4 mx-auto md:p-8 lg:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            © {new Date().getFullYear()} amagami. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}