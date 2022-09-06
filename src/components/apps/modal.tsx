import Button from "@components/elements-ui/button"
import Modal from "@components/elements-ui/modal"
import WrapperShadow from "@components/elements-ui/wrapper/wrapper-shadow"
import { useState } from "react"


export default function ComponentModalApp() {

    const [openModal, setOpenModal] = useState(false)

    return (
        <>
            <Modal open={openModal} onCancle={() => { setOpenModal(false) }} >
                <div className="min-w-[300px] bg-white p-3 rounded" >
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit vero suscipit enim iste placeat quasi tempore corrupti voluptatibus illum beatae at veniam porro eum, assumenda modi ratione, ullam esse a est error expedita quas? Molestias quos aspernatur eius quidem obcaecati nihil hic vero impedit unde. Voluptatum nisi sint veritatis nostrum cum, quas adipisci consectetur commodi tempore quia porro, dolorum quisquam id quasi qui distinctio expedita. Maiores facere fugit facilis similique quos culpa, molestias, repudiandae natus veritatis corporis libero est nam maxime consequatur optio delectus necessitatibus illo ducimus ipsam vitae nemo sint quod! Aspernatur, sint praesentium iusto illo similique quos dolorem.
                    </p>
                </div>
            </Modal>
            <WrapperShadow>
                <Button onClick={() => setOpenModal(true)} >
                    <span>
                        Open modal
                    </span>
                </Button>
            </WrapperShadow>
        </>
    )
}