"use client";
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogContent, Dialog } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {Layout} from "@/components/Layout/layout";
import {ReactTyped} from "react-typed";


export function Welcome() {
    return (
        <Layout>
        <main className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center gap-6">
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 animate-typing relative">
                   <ReactTyped strings={[`> Hello world! Stay tuned as I revamp my digital Playground!`]}
                                typeSpeed={30}
                                cursorChar={''}/>
                </h1>
                <div className="flex flex-col items-center gap-4 opacity-100 animate-fade-in">
                    <div className="flex items-center gap-8">
                        <a
                            className="text-gray-300 hover:text-gray-100 transition-colors hover:scale-105 transform transition-transform duration-300"
                            href="https://github.com/dhairya9622"
                            rel="noopener noreferrer"
                            target="_blank">
                            <GithubIcon className="w-6 h-6" />
                        </a>
                        <a
                            className="text-gray-300 hover:text-gray-100 transition-colors hover:scale-105 transform transition-transform duration-300"
                            href="https://www.linkedin.com/in/dhairyagajjar190/"
                            rel="noopener noreferrer"
                            target="_blank">
                            <LinkedinIcon className="w-6 h-6" />
                        </a>
                        <Dialog>
                            <DialogTrigger asChild>
                                <a
                                    className="text-gray-300 hover:text-gray-100 transition-colors hover:scale-105 transform transition-transform duration-300"

                                    rel="noopener noreferrer">
                                    <PhoneIcon className="w-6 h-6" />
                                </a>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px] bg-gray-800 text-gray-300 animate-text-gradient bg-gradient-to-r from-blue-700 to-purple-800">

                                <div className="grid gap-4 py-4">
                                    <div>
                                        <Label className="mb-1" htmlFor="subject">
                                            Phone: +1 (551) 301-4323
                                        </Label>
                                    </div>
                                    <div>
                                        <Label className="mb-1" htmlFor="message">
                                            Email : contact@dhairya.io
                                        </Label>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <Separator className="w-full" orientation="horizontal">
                        <div className="flex items-center">
                            <div className="flex-grow border-t border-gray-700" />
                            <span className="flex-shrink mx-4 text-gray-400">DG</span>
                            <div className="flex-grow border-t border-gray-700" />
                        </div>
                    </Separator>
                    {/*<Dialog>*/}
                    {/*    <DialogTrigger asChild>*/}
                    {/*        <Button className="mt-8 text-white bg-gradient-to-r from-blue-600 to-purple-700 animate-typing shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-shadow px-6 py-3 rounded-lg font-semibold hover:scale-[1.02] hover:translate-y-[-1px] transition-transform duration-300">*/}
                    {/*            Chat with my AI assistant!*/}
                    {/*        </Button>*/}
                    {/*    </DialogTrigger>*/}
                    {/*    <DialogContent className="sm:max-w-[425px] bg-gray-800 text-gray-300 animate-text-gradient bg-gradient-to-r from-blue-700 to-purple-800">*/}
                    {/*        <DialogHeader>*/}
                    {/*            <DialogTitle className="hover:scale-[1.02] transition-transform">*/}
                    {/*                Who are you?*/}
                    {/*                <div className="grid gap-4 py-4">*/}
                    {/*                    <Link*/}
                    {/*                        className="btn btn-primary px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold active:scale-95 transition-transform"*/}
                    {/*                        href="/chat" >*/}
                    {/*                        I am a recruiter*/}
                    {/*                    </Link>*/}
                    {/*                    <Link*/}
                    {/*                        className="btn btn-secondary px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-semibold active:scale-95 transition-transform"*/}
                    {/*                        href="/chat">*/}
                    {/*                        I want to hire a freelancer*/}
                    {/*                    </Link>*/}
                    {/*                </div>*/}
                    {/*            </DialogTitle>*/}
                    {/*        </DialogHeader>*/}
                    {/*    </DialogContent>*/}
                    {/*</Dialog>*/}
                </div>
            </div>
        </main>
        </Layout>
    );
}

function GithubIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    );
}

function LinkedinIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

function PhoneIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}
