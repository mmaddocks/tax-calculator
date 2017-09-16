/**
 * Script to calculate tax on salary
 * calcBands() function calculates the percentage of salary in each band
 * calcTax() function calculates the amount(£) of tax for each band
**/

document.getElementById("calculate-button").addEventListener( "click", calcBands );

function calcBands() {

    // Grab salary data
    var salary = document.getElementById("salary-input").value;
    var taxBandA;
    var taxBandB;
    var taxBandC;
    console.log("Your input salary is: " + "£" + salary);

    // Percent of salary is tax free (under £10k)
    var taxFree = 10000 / salary * 100; // TaxFree as % of salary
    taxFree = taxFree.toFixed(1);
    console.log(taxFree + "% of your salary is tax free (under £10,000)");

    // Percent of salary between £10,001 - £35,000
    if ( (salary > 10000) && (salary <= 35000) ) {
        taxBandA = salary - 10000; // Deduct the band difference 25000
        taxBandA = taxBandA / salary * 100; // Calc percentage of salary
        taxBandA = taxBandA.toFixed(1);
        console.log(taxBandA + "% of your salary is between £10,001 - £35,000");
    }

    // Percent of salary that falls into each band between £10,001 - £100k)
    if ( (salary > 35000) && (salary <= 100000)) {

        taxBandA = salary - 35000; // Deduct tax band A cap
        taxBandA = salary - (10000 + taxBandA); // Add taxFree + taxBandA, then deduct from salary
        taxBandA = taxBandA / salary * 100; // Calc percentage of salary
        taxBandA = taxBandA.toFixed(1);
        console.log(taxBandA + "% of your salary is between £10,001 - £35,000");

        taxBandB = salary - 35000; // Deduct tax band A
        taxBandB = taxBandB / salary * 100; // Calc percentage of salary
        taxBandB = taxBandB.toFixed(1);
        console.log(taxBandB + "% of your salary is between £35,001 - £100,000");

    } else if ( salary < 35000 ) {
        console.log("0% of your salary is over £35,000");
    }

    // Percent of salary over £100k that falls into each band
    if ( salary > 100000) {

        taxBandA = salary - 35000; // Deduct tax band A cap
        taxBandA = salary - (10000 + taxBandA); // Add taxFree + taxBandA, then deduct from salary
        taxBandA = taxBandA / salary * 100; // Calc percentage of salary
        taxBandA = taxBandA.toFixed(1);
        console.log(taxBandA + "% of your salary is between £10,001 - £35,000");

        taxBandB = salary - 100000; // Deduct tax band B cap
        taxBandB = salary - (35000 + taxBandB); // Add taxbandA + taxBandB, then deduct from salary
        taxBandB = taxBandB / salary * 100; // Calc percentage of salary
        taxBandB = taxBandB.toFixed(1);
        console.log(taxBandB + "% of your salary is between £35,001 - £100,000");

        taxBandC = salary - 100000; // Deduct tax band B
        taxBandC = taxBandC / salary * 100; // Calc percentage of salary
        taxBandC = taxBandC.toFixed(1);
        console.log(taxBandC + "% of your salary is over £100,000");
    } else {
        console.log("0% of your salary is over £100,000");
    }

    // Call tax calculation function
    calcTax( salary );

    /*
    // Create elements and insert tax data to document
    var para = document.createElement("p");
    var node = document.createTextNode( taxFree + "% of your salary is tax free (under £10,000)" );
    para.appendChild(node);
    var salaryContainer = document.getElementById("tax-details-container");
    salaryContainer.appendChild(para);
    */
}

function calcTax( salary ) {

    var totalTaxable = salary - 10000; // Total amount of salary that is taxable (after tax free deducted)
    var taxAmountA;
    var taxAmountB;
    var taxAmountC;
    var totalTax; // variable for totaling multiple tax bracket values

    // Salary under £35k (20% tax)
    if ( totalTaxable <= 35000 ) {
        taxAmountA = totalTaxable * 0.2;
        console.log( "£" + taxAmountA + " tax on earnings between £10,001 - £35,000" );
        totalTax = taxAmountA;
    }

    // Salary under £35k (20% tax) and salary over £35k (40% tax)
    if ( (totalTaxable > 35000) && (totalTaxable <= 100000) ) {

        taxAmountA = 35000 * 0.2;
        console.log( "£" + taxAmountA + " tax on earnings between £10,001 - £35,000" );

        taxAmountB = totalTaxable - 35000;
        taxAmountB = taxAmountB * 0.4; // e.g 5000 x 0.4
        console.log( "£" + taxAmountB + " tax on earnings between £35,001 - £100,000");

        totalTax = taxAmountA + taxAmountB;
    }

    // Salary under £35k (20% tax), salary over £35k (40% tax) and salary over £100k (50% tax)
    if ( totalTaxable > 100000 ) {

        taxAmountA = 35000 * 0.2;
        console.log( "£" + taxAmountA + " tax on earnings between £10,001 - £35,000");

        taxAmountB = 100000 - 35000; // 65000 taxable @ 40%
        taxAmountB = taxAmountB * 0.4;
        console.log( "£" + taxAmountB + " tax on earnings between £35,001 - £100,000");

        taxAmountC = totalTaxable - 100000; // Everything over £100K taxable @ 50%
        taxAmountC = taxAmountC * 0.5;
        console.log( "£" + taxAmountC + " tax on earnings over £100,000");

        totalTax = taxAmountA + taxAmountB + taxAmountC;
    }

    // Total tax and salary after tax
    console.log( "Total tax due is: £" + totalTax );
    console.log( "Total salary after tax (NET): £" + (salary - totalTax) );

}
