export function initEmailNotifications() {
    emailjs.init('HiXAHXG4rDqmZmvCA');

    window.notifySocialClick = (linkName) => {
        const serviceID = 'service_u7yykgm';
        const templateID = 'template_i16quoq';

        const templateParams = {
            title: linkName,
            name: 'Посетитель',
            time: new Date().toLocaleString(),
            message: `Клик по иконке ${linkName}`
        };

        emailjs.send(serviceID, templateID, templateParams);
    };
}