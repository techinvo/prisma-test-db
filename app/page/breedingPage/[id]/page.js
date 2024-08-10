const breeding = [
    {
        id: 1,
        animal: "ตุ๊กแกเสือดาว",
        parent_age_weight: {
            female: {
                age: "ควรมีอายุอย่างน้อย 18-24 เดือน",
                weight: "น้ำหนักอย่างน้อย 50 กรัม"
            },
            male: {
                age: "ควรมีอายุอย่างน้อย 10 เดือน",
                weight: "น้ำหนักอย่างน้อย 40 กรัม"
            }
        },
        optimal_breeding_period: {
            months: "ฤดูใบไม้ผลิ (Spring): เดือนมีนาคม - พฤษภาคม, ฤดูร้อน (Summer): เดือนมิถุนายน - สิงหาคม",
            day_temperature: "อุณหภูมิกลางวันประมาณ 26-30°C",
            night_temperature: "อุณหภูมิกลางคืนประมาณ 18-22°C"
        },
        mating_to_laying_time: "ใช้เวลาประมาณ 2-4 สัปดาห์หลังการผสมพันธุ์",
        laying_to_hatching_time: "ใช้เวลาประมาณ 35-60 วัน",
        incubation_details: {
            incubation_temperature: "อุณหภูมิในการฟักควรอยู่ที่ 26-30°C",
            humidity: "ความชื้นสัมพัทธ์ประมาณ 75-85%",
            equipment: "ใช้กล่องฟักไข่ที่มีสารฟักเช่น เวอร์มิคูไลท์หรือเพอร์ไลท์"
        },
        other_information: "จัดเตรียมที่อยู่ที่มีแหล่งความร้อนและที่ซ่อนเพื่อให้ตุ๊กแกสามารถควบคุมอุณหภูมิร่างกายได้",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Eublepharis_macularius1.jpg"
    },
    {
        id: 2,
        animal: "งูคอร์น",
        parent_age_weight: {
            female: {
                age: "งูคอร์นเพศเมียควรมีอายุอย่างน้อย 2 ปี",
                weight: "น้ำหนักไม่ต่ำกว่า 500 กรัม"
            },
            male: {
                age: "งูคอร์นเพศผู้สามารถผสมพันธุ์ได้ตั้งแต่อายุ 1.5 ปี",
                weight: "น้ำหนักไม่ต่ำกว่า 400 กรัม"
            }
        },
        optimal_breeding_period: {
            months: "ฤดูผสมพันธุ์ธรรมชาติของงูคอร์นคือ ช่วงเดือนกุมภาพันธ์ถึงเมษายน",
            day_temperature: "25-28 องศาเซลเซียส",
            night_temperature: "22-25 องศาเซลเซียส"
        },
        mating_to_laying_time: "ใช้เวลา 1-2 อาทิตย์",
        laying_to_hatching_time: "โดยทั่วไปใช้เวลา 45-60 วัน",
        incubation_details: {
            incubation_temperature: "27-29 องศาเซลเซียส",
            humidity: "ความชื้นที่เหมาะสมสำหรับการฟักไข่คือ 70-80%",
            equipment: "ใส่ขี้ไก่หรือเวอร์มิคูไลท์เปียกในกล่องพลาสติก วางไข่ตุ๊กแกบนวัสดุเหล่านี้ ปิดฝากล่อง เจาะรูระบายอากาศ"
        },
        other_information: "เตรียมที่อยู่อาศัยสำหรับพ่อแม่พันธุ์และลูกงู เตรียมอาหารและน้ำสำหรับพ่อแม่พันธุ์และลูกงู เตรียมอุปกรณ์สำหรับการฟักไข่",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/CornSnake.jpg/1280px-CornSnake.jpg"
    },
    {
        id: 3,
        animal: "งูบอล",
        parent_age_weight: {
            female: {
                age: "พ่อแม่พันธุ์ควรมีอายุอย่างน้อย 2-3 ปี",
                weight: "เพศเมียควรมีน้ำหนักอย่างน้อย 1,500 กรัม"
            },
            male: {
                age: "พ่อแม่พันธุ์ควรมีอายุอย่างน้อย 2-3 ปี",
                weight: "เพศผู้ควรมีน้ำหนักอย่างน้อย 700-800 กรัม"
            }
        },
        optimal_breeding_period: {
            months: "ฤดูผสมพันธุ์ของงูบอลมักเริ่มต้นตั้งแต่เดือนพฤศจิกายนถึงมีนาคม",
            day_temperature: "กลางวัน: 27-29 °C",
            night_temperature: "กลางคืน: 24-26 °C"
        },
        mating_to_laying_time: "ตั้งแต่การผสมพันธุ์จนถึงการออกไข่ ใช้เวลาประมาณ 4-6 สัปดาห์",
        laying_to_hatching_time: "ตั้งแต่ออกไข่จนถึงฟัก ใช้เวลาประมาณ 55-60 วัน",
        incubation_details: {
            incubation_temperature: "อุณหภูมิในการฟัก: 31-32 °C",
            humidity: "ความชื้น: 80-90%",
            equipment: "เครื่องฟักไข่ที่มีการควบคุมอุณหภูมิและความชื้น"
        },
        other_information: "การตรวจสอบการตั้งครรภ์: หลังจากการผสมพันธุ์ ควรตรวจสอบการตั้งครรภ์ของเพศเมียโดยการใช้อัลตราซาวด์หรือตรวจสอบลักษณะทางกายภาพ การเตรียมสถานที่วางไข่: ควรเตรียมกล่องวางไข่ที่มีวัสดุรองรับที่เหมาะสม เช่น วัสดุรองรับที่รักษาความชื้นได้ดี การดูแลแม่พันธุ์: หลังการวางไข่ ควรให้แม่พันธุ์ได้พักผ่อนและฟื้นฟูร่างกาย โดยให้สารอาหารที่มีคุณภาพและเหมาะสม",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Ball_python_lucy.JPG"
    },
    {
        id: 4,
        animal: "งูฮอกโนส",
        parent_age_weight: {
            female: {
                age: "เพศเมียควรมีอายุประมาณ 2 ปีขึ้นไป",
                weight: "เพศเมียควรมีน้ำหนักอย่างน้อย 250-300 กรัม"
            },
            male: {
                age: "งูฮอกโนสเพศผู้ควรมีอายุประมาณ 1 ปี",
                weight: "งูฮอกโนสเพศผู้ควรมีน้ำหนักอย่างน้อย 60-70 กรัม"
            }
        },
        optimal_breeding_period: {
            months: "ช่วงเวลาที่เหมาะสมที่สุดสำหรับการผสมพันธุ์คือช่วงปลายฤดูหนาวถึงต้นฤดูใบไม้ผลิ (ประมาณเดือนมีนาคมถึงพฤษภาคม)",
            day_temperature: "กลางวัน: 26-28°C",
            night_temperature: "กลางคืน: 18-22°C"
        },
        mating_to_laying_time: "หลังจากผสมพันธุ์แล้วจะใช้เวลาประมาณ 4-6 สัปดาห์ในการพัฒนาไข่",
        laying_to_hatching_time: "ใช้เวลาประมาณ 50-60 วัน",
        incubation_details: {
            incubation_temperature: "อุณหภูมิที่เหมาะสมในการฟักไข่อยู่ที่ประมาณ 27-29°C",
            humidity: "ความชื้น: 80-90%",
            equipment: "กล่องฟักไข่ที่มีฝาปิดแน่น วัสดุฟักไข่ เช่น เวอร์มิคูไลท์หรือเพอร์ไลท์ที่ชุ่มน้ำ เครื่องควบคุมอุณหภูมิและความชื้น"
        },
        other_information: "การเตรียมสถานที่: ควรเตรียมสถานที่เงียบสงบและไม่มีการรบกวน การดูแลระหว่างการฟัก: ควรตรวจสอบความชื้นและอุณหภูมิอย่างสม่ำเสมอ การเตรียมการหลังฟัก: เมื่อฟักออกมาแล้วควรเตรียมสถานที่สำหรับการเลี้ยงดูเบื้องต้น รวมถึงการจัดการอาหารและน้ำให้เพียงพอ",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Heterodon_platirhinos.jpg/1280px-Heterodon_platirhinos.jpg"
    }
];

export default function DetailBreedingPage({ params }) {
    const { id } = params;
    const animal = breeding.find(item => item.id === parseInt(id));

    if (!animal) {
        return <div className="text-center text-red-500">Animal not found</div>;
    }

    return (
        <div className="max-w-4xl p-6 bg-white shadow-lg w-full rounded-lg">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">{animal.animal}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <img src={animal.image_url} alt={animal.animal} className="w-full h-auto rounded-lg shadow-md" />
                </div>
                
                <div>
                    <div className="mb-4">
                        <h2 className="text-xl font-bold text-gray-800">Parent Age & Weight</h2>
                        <p className="text-gray-700 mt-2">
                            <span className="font-semibold">Female:</span> {animal.parent_age_weight.female.age}, {animal.parent_age_weight.female.weight}
                        </p>
                        <p className="text-gray-700">
                            <span className="font-semibold">Male:</span> {animal.parent_age_weight.male.age}, {animal.parent_age_weight.male.weight}
                        </p>
                    </div>

                    <div className="mb-4">
                        <h2 className="text-xl font-bold text-gray-800">Optimal Breeding Period</h2>
                        <p className="text-gray-700 mt-2">{animal.optimal_breeding_period.months}</p>
                        <p className="text-gray-700">Day Temperature: {animal.optimal_breeding_period.day_temperature}</p>
                        <p className="text-gray-700">Night Temperature: {animal.optimal_breeding_period.night_temperature}</p>
                    </div>

                    <div className="mb-4">
                        <h2 className="text-xl font-bold text-gray-800">Mating to Laying Time</h2>
                        <p className="text-gray-700 mt-2">{animal.mating_to_laying_time}</p>
                    </div>

                    <div className="mb-4">
                        <h2 className="text-xl font-bold text-gray-800">Laying to Hatching Time</h2>
                        <p className="text-gray-700 mt-2">{animal.laying_to_hatching_time}</p>
                    </div>

                    <div className="mb-4">
                        <h2 className="text-xl font-bold text-gray-800">Incubation Details</h2>
                        <p className="text-gray-700 mt-2">Temperature: {animal.incubation_details.incubation_temperature}</p>
                        <p className="text-gray-700">Humidity: {animal.incubation_details.humidity}</p>
                        <p className="text-gray-700">Equipment: {animal.incubation_details.equipment}</p>
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-bold text-gray-800">Other Information</h2>
                <p className="text-gray-700 mt-2">{animal.other_information}</p>
            </div>
        </div>
    );
}

