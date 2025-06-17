function Contact() {
    return (
    <>
    <div className="border-2 border-teal-400 pt-10 mr-10 ml-10 p-10 mb-5 rounded-4xl bg-black text-teal-400" id="contact">
        <p className="text-3xl">Contact</p>
        <p className="text-1xl pt-4">Connect with me...</p>
        <div className="flex align-items-space-around justify-around pt-10 ">
<a><i className="fab fa-instagram text-teal-400 text-5xl"></i></a>
<a><i className="fas fa-envelope text-teal-400 text-5xl"></i> </a>       
<a><i className="fas fa-phone text-teal-400 text-5xl"></i>        </a>
<a><i className="fab fa-github text-teal-400 text-5xl"></i>        </a>
</div>
    </div>
    </>
    )
}

export default Contact;