import {ReactTyped} from "react-typed";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Separator} from "@/components/ui/separator";
import {GithubIcon, LinkedinIcon, PhoneIcon} from "lucide-react";
import {MobileLayout} from "@/components/Layout/mobileLayout";

const MobilePage = () => {
    return (
        <MobileLayout>
        <div>
            <main className="flex flex-col items-center justify-center max-h-screen">
                <div className="flex flex-col items-center justify-center gap-6">
                    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 animate-typing relative">
                        <ReactTyped strings={[`> Hello world!`]}
                                    typeSpeed={30}
                                    cursorChar={'|'}
                                    blink={true}/>
                    </h1>
                    <div className="flex flex-col items-center gap-4 opacity-100 animate-fade-in">
                        <div className="flex items-center gap-8">
                            <a
                                className="text-gray-300 hover:text-gray-100 transition-colors hover:scale-105 transform transition-transform duration-300"
                                href="https://github.com/dhairya9622"
                                rel="noopener noreferrer"
                                target="_blank">
                                <GithubIcon className="w-6 h-6"/>
                            </a>
                            <a
                                className="text-gray-300 hover:text-gray-100 transition-colors hover:scale-105 transform transition-transform duration-300"
                                href="https://www.linkedin.com/in/dhairyagajjar190/"
                                rel="noopener noreferrer"
                                target="_blank">
                                <LinkedinIcon className="w-6 h-6"/>
                            </a>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <a
                                        className="text-gray-300 hover:text-gray-100 transition-colors hover:scale-105 transform transition-transform duration-300"

                                        rel="noopener noreferrer">
                                        <PhoneIcon className="w-6 h-6"/>
                                    </a>
                                </DialogTrigger>
                                <DialogContent
                                    className="sm:max-w-[425px] bg-gray-800 text-gray-300 animate-text-gradient bg-gradient-to-r from-blue-700 to-purple-800">

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
                                <div className="flex-grow border-t border-gray-700"/>
                                <span className="flex-shrink mx-4 text-gray-400">DG</span>
                                <div className="flex-grow border-t border-gray-700"/>
                            </div>
                        </Separator>
                    </div>
                </div>
            </main>
        </div>
        </MobileLayout>
    );
};

export default MobilePage;