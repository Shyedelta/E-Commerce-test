import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, easeOut } from 'framer-motion';

const Carrusel = () => {
    const [imagenes, setImagenes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [datos, setDatos] = useState([]);
    const [showFirstItem, setShowFirstItem] = useState(false);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await fetch('https://fakestoreapi.in/api/products');
                if (!response.ok) throw new Error("Error al obtener los datos!");
                const data = await response.json();
                const datafilter = data.products.filter(p => p.category === "gaming");
                setDatos(datafilter);
                setImagenes(datafilter.map(p => p.image));
            } catch (error) {
                console.log("Error al obtener los productos: ", error);
            }
        };
        fetchProductos();
    }, []);

    useEffect(() => {
        if (imagenes.length > 1) {
            const interval = setInterval(() => {
                setCurrentIndex(prevIndex => (prevIndex === imagenes.length - 1 ? 0 : prevIndex + 1));
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [imagenes]);

    useEffect(() => {
        if (imagenes.length > 0) {
            setTimeout(() => {
                setShowFirstItem(true);
            }, 800);
        }
    }, [imagenes]);

    const previousIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
    const nextIndex = (currentIndex + 1 + imagenes.length) % imagenes.length;

    const createVariants = (duration, ease) => ({
        initial: { opacity: 0, x: 100, transition: { duration, ease } },
        animate: { opacity: 1, x: 0, transition: { duration, ease } },
        exit: { opacity: 1, x: 100, transition: { duration, ease } },
    });
    const imageVariants = createVariants(1.5, [0.56, 0.03, 0.12, 1.04]);
    const imageVariants2 = createVariants(2, [0.56, 0.03, 0.12, 1.04]);
    const getBackgroundStyle = (color) => {
        return {
            backgroundColor: `${color || 'white'}`,
            padding: '0.5em',
            cursor: 'pointer',
            borderRadius: '50%',
            width: '1em',
        };
    };

    return (
        <div id="animation-carousel" className="select-none relative h-full w-full overflow-hidden">
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut"
                    }}
                    className="h-full pb-5 overflow-hidden rounded-lg">
                    {imagenes.map((imagen, index) => (
                        currentIndex === index && (
                            <div key={index} className='p-0 h-full grid xl:place-content-center place-content-start xl:overflow-hidden overflow-hidden overflow-y-auto '>
                                {index === 0 && !showFirstItem ? null : (
                                    <>
                                        <div className='w-full py-10 mix-blend-multiply gap-5 grid grid-cols-1 xl:grid-cols-3 place-content-center'>
                                            <motion.div
                                                initial="initial"
                                                animate="animate"
                                                exit="exit"
                                                variants={imageVariants2}
                                                className='hidden xl:block tracking-wides text-2xl max-w-[22vw] h-full pl-10 pb-10 pt-20'>
                                                <p className='line-clamp-2 tracking-widest'>{(datos[index].title).split(" ").slice(0, 3).join(" ")}</p>
                                                <p className='line-clamp-[7] pr-9 tracking-wide text-sm mt-5 text-gray-400'>{(datos[index].description).split(".").slice(0, 2).join(". ")}</p>
                                            </motion.div>
                                            <motion.img
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{
                                                    duration: 2.5,
                                                    ease: "easeInOut"
                                                }}
                                                src={imagen} alt={`Slide ${index + 1}`}
                                                className="w-[22em] aspect-square max-h-[24em] h-[24em] object-contain m-auto" />
                                            <div className='mix-blend-normal hidden xl:block tracking-wides rounded-xl text-2xl w-full h-full'>
                                                <motion.div>
                                                    <div className='p-5 m-5 rounded-lg mx-auto bg-gray-100/50 blur-0 flex flex-row justify-between gap-10 w-full'>
                                                        <span className='text-xl w-fit tracking-wider'>Colours: </span>
                                                        <div className='w-full grid grid-cols-5 place-content-center gap-5'>
                                                            <span style={getBackgroundStyle(datos[index].color)} className="flex w-5 hover:scale-110 outline outline-2 outline-offset-1 outline-gray-200 hover:outline-gray-300 cursor-pointer "></span>
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col gap-5 p-5 m-5 rounded-lg mx-auto bg-gray-100/50 blur-0 w-full h-[11em]'>
                                                        <motion.div
                                                            initial="initial"
                                                            animate="animate"
                                                            exit="exit"
                                                            variants={imageVariants2}
                                                            className='flex flex-col justify-between h-full tracking-wides text-xl w-full'
                                                        >
                                                            <p className=' line-clamp-1 tracking-widest '>The model: <span className='text-sm text-gray-500 tracking-normal uppercase'>{(datos[index].model)}</span></p>
                                                            <p className=' line-clamp-2 tracking-widest uppercase'>{(datos[index].price)} <span className='pb-2 text-sm text-gray-500'>€</span></p>

                                                            <div className='flex flex-col gap-5'>
                                                                <span className='py-0'>Styles: </span>
                                                                <div className=' text-center flex gap-x-2 '>
                                                                    <span className=' bg-white p-5 w-24 rounded-lg cursor-pointer hover:scale-110 '>I</span>
                                                                    <span className=' bg-white p-5 w-24 rounded-lg cursor-pointer hover:scale-110 '>II</span>
                                                                    <span className=' bg-white p-5 w-24 rounded-lg cursor-pointer hover:scale-110 '>III</span>
                                                                    <span className=' bg-white p-5 w-24 rounded-lg cursor-pointer hover:scale-110 '>IV</span>
                                                                    <span className=' bg-white p-5 w-24 rounded-lg cursor-pointer hover:scale-110 '>V</span>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>

                                        <div className='grid grid-cols-1 gap-5 xl:grid-cols-3 xl:m-0 mx-10'>
                                            {datos.map((dato, idx) => {
                                                return (
                                                    previousIndex === idx && (
                                                        <motion.div
                                                            key={idx}
                                                            initial="initial"
                                                            animate="animate"
                                                            exit="exit"
                                                            variants={imageVariants2}
                                                            className=""
                                                        >
                                                            <div className='  tracking-wider shadow-sm bg-white w-full p-7 px-10 rounded-lg'>
                                                                <span className='text-sm text-gray-300'>Anterior</span>
                                                                <p className='text-xl line-clamp-1 xl:max-w-[14em] max-w-[20em] text-ellipsis my-1 mb-2 text-gray-500'>
                                                                    {dato.title}
                                                                </p>
                                                                <p className='text-sm line-clamp-2 xl:max-w-[18em] text-gray-400'>{(dato.description)}</p>
                                                            </div>
                                                        </motion.div>
                                                    )
                                                )
                                            })}
                                            {datos.map((dato, idx) => {
                                                return (
                                                    nextIndex === idx && (
                                                        <motion.div
                                                            key={idx}
                                                            initial="initial"
                                                            animate="animate"
                                                            exit="exit"
                                                            variants={imageVariants2}
                                                            className=""
                                                        >
                                                            <div className=' tracking-wider shadow-sm bg-white w-full p-7 px-10 rounded-lg'>
                                                                <span className='text-sm text-gray-300'>Siguiente</span>
                                                                <p className='text-xl line-clamp-1 xl:max-w-[14em] max-w-[22em] text-ellipsis my-1 mb-2 text-gray-700 '>
                                                                    {dato.title}
                                                                </p>
                                                                <p className='text-sm line-clamp-2 xl:max-w-[18em] text-gray-400 '>{(dato.description)}</p>
                                                            </div>
                                                        </motion.div>
                                                    )
                                                )
                                            })}
                                            <motion.div
                                                key="shop"
                                                whileHover={{
                                                    scale: 0.95,
                                                    transition: { duration: 0.5 }
                                                }}
                                                whileTap={{ scale: 0.9 }}
                                                className=' cursor-pointer'
                                            >
                                                <div className=' tracking-wide shadow-sm z-50 bg-white w-full h-full p-7 px-10 grid place-content-center rounded-lg'>
                                                    <p className='text-3xl line-clamp-1 xl:max-w-[14em] h-full max-w-[20em] text-ellipsis my-1 mb-2 text-gray-700 font-bold'>
                                                        Shop
                                                    </p>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </>
                                )}
                            </div>
                        )
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default Carrusel;
