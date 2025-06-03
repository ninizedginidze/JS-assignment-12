// მომხმარებლის ასაკის შეყვანა და გადამოწმება
let ageInput = prompt('Enter your age :');
if (ageInput === null || ageInput.trim() === '') {
    alert('Age is required. Please enter your age using numbers only.');
} else {
    let age = Number(ageInput);
    if (isNaN(age) || age < 0) {
        alert('Invalid input. Age must be a valid number.');
    } else {
        // ფილმის ტიპის შეყვანა და გადამოწმება
        let movieType = prompt('Enter movie type: "regular" or "3D"');
        if (movieType === null || movieType.trim() === '') {
            alert('Movie type is required. Please enter "regular" or "3D".');
        } else {
            movieType = movieType.toLowerCase();
            if (movieType !== 'regular' && movieType !== '3d') {
                alert('Invalid movie type. Please enter either "regular" or "3D".');
            } else {
                // დღის მონაკვეთის არჩევა და გადამოწმება
                let timeOfDay = prompt('Enter time of day: "matinee" or "evening"');
                if (timeOfDay === null || timeOfDay.trim() === '') {
                    alert('Time of day is required. Please enter "matinee" or "evening".');
                } else {
                    timeOfDay = timeOfDay.toLowerCase();
                    if (timeOfDay !== 'matinee' && timeOfDay !== 'evening') {
                        alert('Invalid input. Please enter "matinee" or "evening" for time of day.');
                    } else {
                        // ფასდაკლების ბილეთის შემოწმება
                        let hasDiscount = prompt('Do you have a discount ticket? Enter "yes" or "no"');
                        if (hasDiscount === null || hasDiscount.trim() === '') {
                            alert('Discount info is required. Please enter "yes" or "no".');
                        } else {
                            hasDiscount = hasDiscount.toLowerCase();
                            if (hasDiscount !== 'yes' && hasDiscount !== 'no') {
                                alert('Invalid input. Please enter "yes" or "no" for discount ticket.');
                            } else {
                                // საწყისი ფასი ასაკის მიხედვით
                                let price = 0;

                                if (age < 10) {
                                    price = 5;
                                } else if (age <= 65) {
                                    price = 15;
                                } else {
                                    price = 10;
                                }

                                // ფასის კორექტირება movieType-ის მიხედვით

                                switch (movieType) {
                                    case '3d':
                                        price += 5;
                                        break;
                                    case 'regular':
                                        break;
                                }

                                // ფასის კორექტირება დროის მიხედვით

                                switch (timeOfDay) {
                                    case 'evening':
                                        price += 5;
                                        break;
                                    case 'matinee':
                                        break;
                                }

                                // ფასადკლების ბილეთი

                                if (hasDiscount === 'yes') {
                                    price *= 0.75;
                                }

                                alert('Your ticket price is: ' + price + ' Lari.');
                            }
                        }
                    }
                }
            }
        }
    }
}