import Hexagon from "@/components/Header/Hexagon";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useCallback } from 'react'
import {IService} from "@/@types";

import {SERVICES} from '@/data'

export default function Hex(){
    const [isOpen, toggleIsOpen] = useState<boolean>(true);
    const [selected, setSelected] = useState<IService | null>(null);

    const closeModal = useCallback(() => {
        toggleIsOpen(false)
        setSelected(null)
    }, []);

    const openModal = useCallback((index: number) => {
            setSelected(SERVICES[index])
            toggleIsOpen(true)
        },
        [],
    );


    // const openModel = useCallback(() => setIsOpen(true), [])

    return(
        <>
            <div className="hex__row">
                <Hexagon index={0} onClick={openModal} className={'hex_electrical'} image='/img/electric_hex.png'/>
                <Hexagon index={1} onClick={openModal} className={'hex_general'} image='/img/general_hex.png'/>
            </div>
            <div className="hex__row">
                <Hexagon index={3} onClick={openModal} image='/img/plumbing_hex.png'/>
                <Hexagon index={-1}  className={'hex_logo'} imgWidth={58} image='/img/logo.png'/>
                <Hexagon index={2} onClick={openModal} className={'hex__painting'} image='/img/painting_hex.png'/>
            </div>
            <div className="hex__row">
                <Hexagon index={4} onClick={openModal} className={'hex_assembly'} image='/img/assembly_hex.png'/>
                <Hexagon index={5} onClick={openModal} className={'hex_mover'} image='/img/mover_hex.png'/>
            </div>
            {
                selected ?

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {selected.title}
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500 mb-2">
                                            {selected.description}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {selected.remarks}
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition> : null }
        </>
    )
}
