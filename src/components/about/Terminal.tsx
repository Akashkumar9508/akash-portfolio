import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
  } from "@/components/ui/terminal";
  
  export function TerminalDemo() {
    return (
      <Terminal>
        <TypingAnimation>&gt; Loading About Me...</TypingAnimation>
  
        <AnimatedSpan delay={1500} className="text-green-500">
          <span>✔ Welcome to my digital space.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={2000} className="text-green-500">
          <span>✔ Passionate about web development & innovation.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={2500} className="text-green-500">
          <span>✔ Skilled in MERN stack & modern UI/UX.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={3000} className="text-green-500">
          <span>✔ Always learning & pushing boundaries.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={3500} className="text-green-500">
          <span>✔ Enthusiastic about building high-performance applications.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={4000} className="text-green-500">
          <span>✔ Open to collaborations & new opportunities.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={4500} className="text-green-500">
          <span>✔ Turning ideas into reality with code.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={5000} className="text-green-500">
          <span>✔ Striving for clean, efficient, and scalable solutions.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={5500} className="text-green-500">
          <span>✔ Let's create something amazing together!</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={6000} className="text-blue-500">
          <span>ℹ Get in Touch:</span>
          <span className="pl-2">- Email: your.email@example.com</span>
          <span className="pl-2">- LinkedIn: linkedin.com/in/yourprofile</span>
        </AnimatedSpan>
  
        <TypingAnimation delay={6500} className="text-muted-foreground">
          Thank you for visiting my About page! 🚀
        </TypingAnimation>
  
       
      </Terminal>
    );
  }
