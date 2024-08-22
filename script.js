// إخفاء شاشة الترحيب وعرض التطبيق
function hideWelcomeScreen() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('app-container').style.display = 'block';
}

// حساب العمر بالتفصيل
function calculateAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();

    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();

    // إذا كان الشهر الحالي أقل من شهر الميلاد أو إذا كان اليوم الحالي أقل من يوم الميلاد
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }
    if (days < 0) {
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
        months--;
    }

    document.getElementById('result').innerText = `عمرك هو ${years} سنة و ${months} شهر و ${days} يوم`;

    getAIAdvice(years);
}

// تقديم نصائح بناءً على العمر
function getAIAdvice(age) {
    let advice;
    if (age < 18) {
        advice = "أنت ما زلت في مرحلة النمو، استمر في التعلم والتطور.";
    } else if (age < 30) {
        advice = "هذه الفترة هي الأنسب لتحقيق أهدافك، احرص على بناء مستقبلك.";
    } else if (age < 50) {
        advice = "استمر في التطور والابتكار، خبرتك تزداد وتساهم في تقدمك.";
    } else {
        advice = "استمتع بالحياة وحافظ على صحتك وشارك خبراتك مع الآخرين.";
    }

    document.getElementById('ai-advice').innerText = advice;
}
