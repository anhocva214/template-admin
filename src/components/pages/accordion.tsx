import Accordion from "@components/elements-ui/accordion";
import WrapperShadow from "@components/elements-ui/wrapper/wrapper-shadow";
import MainLayout from "@components/layouts/main-layout";

export default function ComponentAccordionPage() {

    return (
        <>
            <WrapperShadow>
                <h5 className="mb-5 text-lg font-medium text-slate-500">Basic</h5>

                <Accordion
                    items={[
                        {
                            title: "Heading 1",
                            component: (<p>Content 1: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, ducimus?</p>)
                        },
                        {
                            title: "Heading 2",
                            component: (<p>Content 2: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, ducimus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor incidunt minus molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vero modi harum beatae. Eius rerum optio nulla architecto odio, harum quo, adipisci perferendis vero eligendi numquam, incidunt saepe? Aut doloribus pariatur ratione modi illum voluptatem quibusdam deleniti. Dolorum, recusandae. Repellendus repellat culpa sunt neque saepe blanditiis repudiandae ea possimus nisi!</p>)
                        },
                        {
                            title: "Heading 3",
                            component: (<p>Content 3: Lorem ipsum dolor sit.</p>)
                        }
                    ]}
                />

            </WrapperShadow>

        </>
    )
}