import { useEffect, useState } from 'react';

const COURSES = {
    BASIC: 'Basic',
    PRO: 'Pro',
};

export default function Course() {
    const [school, setSchool] = useState('Hillel');
    const [course, setCourse] = useState(COURSES.BASIC);

    useEffect(() => {
        console.log('Component rendered'); // componentDidMount
    }, []);

    useEffect(() => {
        console.log('One of the state was updated'); //componentDidUpdate
    });

    useEffect(() => {
        return () => {
            console.log('component unmounted'); // componentWillUnmount
        }
    })

    useEffect(() => {
        console.log('School has been changed'); //componentDidUpdate
    }, [school]);

    useEffect(() => {
        console.log('Course has been changed'); //componentDidUpdate
    }, [course]);

    return (
        <div>
            <div>
                <p>
                    Current school: {school}
                </p>
                <button type="button" onClick={() => setSchool('Hillel')}>
                    Hillel
                </button>
                <button type="button" onClick={() => setSchool('Harvard')}>
                    Harvard
                </button>
            </div>

            <div>
                <p>
                    Current: {course}
                </p>
                <button type="button" onClick={() => setCourse(COURSES.BASIC)}>
                    {COURSES.BASIC}
                </button>
                <button type="button" onClick={() => setCourse(COURSES.PRO)}>
                    {COURSES.PRO}
                </button>
            </div>
        </div>
    )
}
