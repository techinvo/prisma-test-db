'use client'

import { useEffect, useState, Suspense } from 'react'; // เพิ่มการ import Suspense
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Button } from "@nextui-org/button";
import { DatePicker } from "@nextui-org/date-picker";
import { getLocalTimeZone, today } from "@internationalized/date";
import { Input } from "@nextui-org/input";

library.add(faPencilAlt);

const ArrivalPage = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const [arrivalDate, setArrivalDate] = useState(today(getLocalTimeZone()));
    const [listsPet, setListsPet] = useState([]);
    const list = searchParams.get('lists');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedLists = localStorage.getItem('listsPet');
            if (savedLists) {
                setListsPet(JSON.parse(savedLists));
            }
        }
    }, []);

    useEffect(() => {
        if (list) {
            try {
                const listConvert = JSON.parse(list);
                const savedLists = localStorage.getItem('listsPet');
                let updatedListsPet = JSON.parse(savedLists) || [];

                const isDuplicate = updatedListsPet.some(pet => pet.name === listConvert.name);
                if (!isDuplicate) {
                    updatedListsPet = [...updatedListsPet, listConvert];
                    setListsPet(updatedListsPet);
                    localStorage.setItem('listsPet', JSON.stringify(updatedListsPet));
                }
                clearQuery();
            } catch (error) {
                console.error('Error parsing list:', error);
            }
        }
    }, [list]);

    const clearQuery = () => {
        const params = new URLSearchParams(searchParams);
        params.delete('lists');
        router.replace(`${pathname}?${params.toString()}`, undefined, { scroll: false });
    };

    const handleArrivalDateChange = (value) => {
        setArrivalDate(value);
    };

    const handleConfirm = async () => {
        if (listsPet.length > 0) {
            for (const list of listsPet) {
                await addPet(list);
            }
        }
        localStorage.setItem('listsPet', '[]');
        router.push(`${process.env.NEXT_PUBLIC_API_URL}/`);
    };

    const addPet = async (data) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/pet`, data);
            console.log('Pet added:', response.data);
        } catch (error) {
            console.error('Error adding pet:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="container mx-auto px-4 py-6 fade-in">
            <div name="header-arrival" className="flex justify-between items-end">
                <DatePicker
                    name="arrival-date"
                    label="Arrival Date"
                    className="w-1/4"
                    labelPlacement="outside"
                    maxValue={today(getLocalTimeZone())}
                    onChange={handleArrivalDateChange}
                />
                <div>
                    <Button color="danger" variant="light" onPress={() => router.push(`${process.env.NEXT_PUBLIC_API_URL}/`, { scroll: false })}>
                        Close
                    </Button>
                    <Button color="primary" onPress={handleConfirm}>
                        Confirm
                    </Button>
                </div>
            </div>
            <div name="body-arrival">
                {Array.isArray(listsPet) && listsPet.length > 0 ? (
                    listsPet.map((list, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
                            <span className="text-lg font-semibold">{list.name}</span>
                            <Button color="warning" variant="light" onPress={() => router.push(`${process.env.NEXT_PUBLIC_API_URL}/page/formpet?editform=${JSON.stringify(list)}`, { scroll: false })}>
                                <FontAwesomeIcon icon="pencil-alt" />
                            </Button>
                        </div>
                    ))
                ) : (
                    <div className="text-center mt-4 text-gray-600">No pets found.</div>
                )}
                <div>
                    <Button color="success" variant="light" onPress={() => router.push(`${process.env.NEXT_PUBLIC_API_URL}/page/formpet`, { scroll: false })}>
                        Add Pet
                    </Button>
                </div>
            </div>
        </div>
    );
};

// เพิ่มส่วนนี้เพื่อใช้ Suspense
const ArrivalPageWrapper = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <ArrivalPage />
    </Suspense>
);

export default ArrivalPageWrapper;
