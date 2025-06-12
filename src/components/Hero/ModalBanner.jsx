import { CarouselHero } from "./CarouselHero"
import { useState, useEffect } from "react"



const ModalBanner = () => {

    const [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
        const modal = document.getElementById("my_modal_banner")
        if (isOpen) {
            modal.showModal()
        }
    }, [isOpen])
  return (
    <dialog id="my_modal_banner" className="modal ">
        <div className="modal-box">

            <CarouselHero />

        </div>
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
  )
}

export default ModalBanner