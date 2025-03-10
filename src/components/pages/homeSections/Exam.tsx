import { FC } from 'react';
import scss from './Exam.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import photo1 from '../../assets/Rectangle 19.png'
import IMG1 from '../../assets/Frame 194.png'
import IMG2 from '../../assets/Frame 196.png'
import IMG3 from '../../assets/write.png'

const Exam: FC = () => {
    return (
        <section className={scss.Exam}>
            <div className="container">
                <div className={scss.content}>
                    <h1>Exams</h1>
                    <p>Exams are tests that assess a person's
                        knowledge, skills, aptitude,<br /> or other qualifications
                        in a specific subject or area of study.
                        They are <br /> used to evaluate academic performance.
                    </p>
                    <div className={scss.content_desk}>
                        <div className={scss.information_desk}>
                            <div className={scss.cambrige_exam}>
                                <Image src={photo1} alt='photo 1' />
                                <div className={scss.info}>
                                    <h2>Cambrige English exams</h2>
                                    <h3>Your path to learning English, step by step.</h3>
                                    <p>Cambridge English Qualifications are in-depth exams <br />
                                        that make learning English enjoyable, effective and rewarding. <br />
                                        Our qualifications are based on research into effective <br />
                                        teaching and learning.
                                    </p>
                                    <Link href={''}>Discover more</Link>
                                </div>
                            </div>
                        </div>
                        <div className={scss.information_block}>
                            <div className={scss.block_desk}>
                                <div className={scss.block}>
                                    <Image src={IMG1} alt='artis' />
                                    <div className={scss.block_info}>
                                        <h4>aptis</h4>
                                        <h2>Choose Aptis for your <br />
                                            assessment needs
                                        </h2>
                                        <p>Aptis is a computer basedtest which provides fast  <br />
                                            results reliably marked by our exsaminest.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={scss.block_desk}>
                                <div className={scss.block}>
                                    <Image src={IMG2} alt='artis' />
                                    <div className={scss.block_info}>
                                        <h4 className={scss.iELTS}>iELTS</h4>
                                        <h2>Here’s all you need to know <br />
                                            about IELTS
                                        </h2>
                                        <p>IELTS (the International English Language Testing <br />
                                            is the world’s most popular.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={scss.block_desk}>
                                <div className={scss.block}>
                                    <Image src={IMG3} alt='artis' />
                                    <div className={scss.block_info}>
                                        <h4 className={scss.exams}>other exams</h4>
                                        <h2>There are a variety of <br />
                                            competitive exams besides.
                                        </h2>
                                        <p>But covering them <br />
                                            is no big deal. Just study ncert books for these.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )


};


export default Exam