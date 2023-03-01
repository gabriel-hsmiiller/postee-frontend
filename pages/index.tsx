import Image from "next/image";
import Link from "next/link";
import { StyledRoot } from "./style";
import { Header } from "../src/components/header";
import MainSection from "../src/components/main-section";

export default function Root() {
    return (
        <StyledRoot>
            <div className="security-info">
                <Link href='/terms-of-use.html' target="_blank">Terms of Use</Link>
                <Link href='/privacy-policy.html' target="_blank">Privacy Policy</Link>
            </div>
            <Header />
            <MainSection />
        </StyledRoot>
    );
}