import { toast } from "react-toastify";

const copyEmailNotify = () => toast("¡Email copied to clipboard!")

export const handleCopyEmail = () => {
    const email = "echevarriajignacio@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        copyEmailNotify()
    }).catch(err => {
        console.error("Error when copying email", err)
    })
}
