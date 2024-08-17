document.getElementById('calculate').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (!weight || !height || height <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    const bmi = weight / (height * height);
    const bmiValue = bmi.toFixed(2);
    document.getElementById('value').textContent = bmiValue;

    let description;
    if (bmi < 18.5) {
        description = 'Abaixo do peso. É recomendável consultar um profissional de saúde para orientação.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        description = 'Peso normal. Continue mantendo uma dieta equilibrada e um estilo de vida saudável.';
    } else if (bmi >= 25 && bmi < 29.9) {
        description = 'Sobrepeso. Considere consultar um profissional de saúde para recomendações sobre dieta e exercício.';
    } else {
        description = 'Obesidade. É importante buscar orientação médica para criar um plano de saúde apropriado.';
    }

    document.getElementById('description').textContent = description;

    // Calcular peso ideal
    const idealWeightMin = (18.5 * height * height).toFixed(2);
    const idealWeightMax = (24.9 * height * height).toFixed(2);
    const idealWeightMessage = `Seu peso ideal está entre ${idealWeightMin} kg e ${idealWeightMax} kg.`;

    // Exibir peso ideal
    const idealWeightElement = document.getElementById('ideal-weight');
    if (idealWeightElement) {
        idealWeightElement.textContent = idealWeightMessage;
    } else {
        const newElement = document.createElement('div');
        newElement.id = 'ideal-weight';
        newElement.textContent = idealWeightMessage;
        document.getElementById('infos').appendChild(newElement);
    }
});
