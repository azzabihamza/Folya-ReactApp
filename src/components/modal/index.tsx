import React , { FC } from 'react';
import { Icon } from 'components/icon';  

interface Props {
    children?: React.ReactNode,
    className?: string,
    title?: string,
    isOpen?: boolean,
    toggle?: () => void,
}

export const Modal: FC<Props> = ({ children, className, title, isOpen = false, toggle }) => {
    return (
        <>
            {isOpen && (
                <div className={`fixed inset-0 z-50 overflow-x-hidden overflow-y-auto ${className}`}>
                    <div className='relative w-full h-full max-w-2xl md:h-auto'>
                        <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
                        {/* Modal header */}
                            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {title}
                                </h3>
                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal" onClick={toggle}>
                                    <Icon name="close" />
                                </button>
                            </div>
                            {/* Modal body  */}
                            <div className='p-6 space-y-6' >
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

