import ShortLine from "./ShortLine.tsx";

type Props = {
    sectionTitle: string,
    sectionDescription: string
}

function SectionIntroduction({sectionTitle, sectionDescription} : Props) {
    return (
        <section className="section-introduction">
            <h2>{sectionTitle}</h2>
            <p>{sectionDescription}</p>
            <ShortLine />
        </section>
    )
}

export default SectionIntroduction;