Highcharts.chart('container1', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Число компаний, следующих международным стандартам (2016 год)'
    },

    xAxis: {
        categories: ['Уровень GRI: Расширенный вариант (версия G4)', 'Уровень GRI: Основной вариант (версия G4)', 'Уровень GRI: Уровень С (версия G3.1)', 'Использование Стандартных элементов отчетности из Руководства GRI', 'Использование Международного стандарта интегрированной отчетности', 'Использование стандарта взаимодействия с заинтересованными сторонами АА 1000 SES', 'Использование стандарта по принципам подотчетности AA 1000 APS', 'Наличие информации об использовании других стандартов отчетности'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: '',
        data: [5, 39, 1, 5, 17, 16, 7, 5]
    }]
});




Highcharts.chart('container2', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Число компаний, следующих международным стандартам, среди повторно обследованных'
    },
    xAxis: {
        categories: ['Уровень GRI: Расширенный вариант (версия G4)', 'Уровень GRI: Основной вариант (версия G4)', 'Уровень GRI: Уровень С (версия G3.1)', 'Использование Стандартных элементов отчетности из Руководства GRI', 'Использование Международного стандарта интегрированной отчетности', 'Использование стандарта взаимодействия с заинтересованными сторонами АА 1000 SES', 'Использование стандарта по принципам подотчетности AA 1000 APS', 'Наличие информации об использовании других стандартов отчетности'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: '2016 год',
        data: [5, 29, 0, 15, 14, 7, 3]
    }, {
        name: '2015 год',
        data: [5, 26, 2, 13, 15, 8, 5]
    }]
});