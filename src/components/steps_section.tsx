import One from '../assets/One.jpg'
import Two from '../assets/two.jpg'
import Three from '../assets/three.jpg'
import Four from '../assets/Four.jpg'
import Five from '../assets/Five.jpg'
const steps = [
    { name: 'Cosmavi Purified Shampoo', use: 'Before Treatment', description: 'COSMAVI Purified Shampoo Cleanses & Prepares Hair For ALL types Of Hair Treatments Lt Cuts Through Product Build UO & Oils To Leave The Hair Super Clean.', img: One },
    { name: 'Cosmavi Nanoplasty', use: 'Treatment', description: 'Wash Your Hair twice using COSMAVI Deep Hydration Shampoo. Wrap a towel around your shoulders. Shake the bottle well & apply the product on clean & slightly damp hair, avoiding the scalp. leave the product to do its magic for 60-90 minutes. Rinse your hair removing only the excess.', img: Two },
    { name: 'Cosmavi Post Shampoo', use: 'After Treatment', description: 'A Sulphate & Paraben free product fit for any after treatment that redefines hair cate & is the best diet for your hair, with DRY Hair Apply a leave in Conditioner or a light serum to ensure you lock in the moisture in your hair after a wash. this will also help you detangle you hair easily, especially if it is long. use a wide-toothed comb and run it through your wet hair to remove tangles.', img: Three },
    { name: 'Cosmavi Post Conditioner', use: 'After Treatment', description: 'Gently towel/dry your hair to remove exvess water after a shower. apply leave in Conditioner following instructions on the bottle. Gently comb through your hair with fingers or a wide-tooth comb. Avoid the crown of your head. let your hair air dry, or continue to style as normal.', img: Four },
    { name: 'Cosmavi Plex Hair Serum', use: 'After Treatment', description: 'Work through clean, damp or dry hair, daily or as needed. Squeeze a few drops of Keratin Repair Bond Plex Oil Hair Serum on your palm, rub your palms together to activate the oil serum and apply by running your fingers through mid - lengths to the tips of your hair, evenly distributing it.', img: Five }
]
const steps_section = () => {
    return (
        <>
            <section className=" steps_section">
                <div className="timeline-main">
                    <h2 className="py-4 mb-9 text-3xl font-bold text-center text-white">Nanoplastia Treatment Instructions</h2>
                    <div className="timeline-wrap text-left">

                        {steps.map((step) => (
                            <div className="timeline-card" key={step.name} >
                                <div className="timeline-card-wrap">
                                    <div className="card-head-wrap">
                                        <h2 className="timeline-card-head">{step.name}</h2>
                                        <h6 className="timeline-card-subhead">{step.use}</h6>
                                    </div>
                                    <img src={step.img} className='h-52 ' alt="" />
                                    <p className="timeline-card-text">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default steps_section