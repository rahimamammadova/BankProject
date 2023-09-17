const options = document.querySelectorAll('.transfer_options button')

const companiesContainer = document.querySelector('.companies')


options.forEach((el) => {
    el.addEventListener('click', (e) => {
        options.forEach((el) => el.classList.remove('active'))
        e.target.classList.add('active')
        const current = [...options].find((el) => el.classList.contains('active'))

        companiesContainer.innerHTML = current.dataset.value === 'local'
         ? 
         
         `<div class="company">
        <div class="company_logo">
            <img src="../Assets/localcomp.webp" alt="">
        </div>
        <div class="company_infos">
            <h1 class="company_name">
                Unitransfer
            </h1>
            <div class="company_details">
                <ul>
                    <li>
                        <span class="prop">
                            Coverage-
                        </span>
                        <span class="text-black-100">
                            local
                        </span>
                    </li>
                    <li>
                        <span class="prop">
                            Currency- 
                        </span>
                        <span class="text-black-100">
                            AZN, USD, EUR, RUB
                        </span>
                    </li>
                    <li>
                        <span class="prop">
                            Fe-
                        </span>
                        <span class="text-black-100">
                            depends on the amount
                        </span>
                    </li>
                </ul>
            </div>
           
            <button class="submit_btn">
                    Transfer Fees <i class="fa-solid fa-circle-down"></i>
            </button>
        </div>
    </div>
    <div class="company">
        <div class="company_logo">
            <img src="../Assets/company1.webp" alt="">
        </div>
        <div class="company_infos">
            <h1 class="company_name">
                Zolotaya Korona
            </h1>
            <div class="company_details">
                <ul>
                    <li>
                        <span class="prop">
                            Coverage-
                        </span>
                        <span class="text-black-100">
                            Azerbaijan, CIS countries and Europe
                        </span>
                    </li>
                    <li>
                        <span class="prop">
                            Currency- 
                        </span>
                        <span class="text-black-100">
                            AZN, USD, EUR and RUB
                        </span>
                    </li>
                    <li>
                        <span class="prop">
                            Fe-
                        </span>
                        <span class="text-black-100">
                            min. from 0.3%
                        </span>
                    </li>
                </ul>
            </div>
            <div class="company_rules">
                <ul>
                    <li>
                        * Commission for transfer to all foreign destinations in Azerbaijani manat - 0%
                    </li>
                    <li>
                        ** It is possible to transfer money via "Zolotaya Korona" system using the UBank application
                    </li>
                    <li>
                        ***It is possible to make a transfer to the bank cards of Ukraine
                    </li>
                </ul>
            </div>
            <button class="submit_btn">
                    Transfer Fees <i class="fa-solid fa-circle-down"></i>
            </button>
        </div>
    </div>
    
    <div class="company">
        <div class="company_logo">
            <img src="../Assets/company3.webp" alt="">
        </div>
        <div class="company_infos">
            <h1 class="company_name">
                Contact
            </h1>
            <div class="company_details">
                <ul>
                    <li>
                        <span class="prop">
                            Coverage-
                        </span>
                        <span class="text-black-100">
                            Azerbaijan, CIS countries and Europe
                        </span>
                    </li>
                    <li>
                        <span class="prop">
                            Currency- 
                        </span>
                        <span class="text-black-100">
                            AZN, USD, EUR and RUB
                        </span>
                    </li>
                    <li>
                        <span class="prop">
                            Fe-
                        </span>
                        <span class="text-black-100">
                            min. from 0.3%
                        </span>
                    </li>
                </ul>
            </div>
            <div class="company_rules">
                <ul>
                    <li>
                        * If the currency of transfer to foreign countries is different from the currency of payment, commission will be - 0%
                    </li>
                    <li>
                        * * Through the "Contact" system it is possible to replenish international bank cards
                    </li>
                    <li>
                        * * * It is possible to send money through the Contact system using UBank 
                    </li>
                </ul>
            </div>
            <button class="submit_btn">
                    Transfer Fees <i class="fa-solid fa-circle-down"></i>
            </button>
        </div>
    </div>` 
    
    : 
    
    
    `   <div class="company">
        <div class="company_logo">
            <img src="../Assets/company1.webp" alt="">
        </div>
        <div class="company_infos">
            <h1 class="company_name">
                Zolotaya Korona
            </h1>
            <div class="company_details">
                <ul>
                    <li>
                        <span class="prop">
                            Coverage-
                        </span>
                        <span class="text-black-100">
                            Azerbaijan, CIS countries and Europe
                        </span>
                    </li>
                    <li>
                        <span class="prop">
                            Currency- 
                        </span>
                        <span class="text-black-100">
                            AZN, USD, EUR and RUB
                        </span>
                    </li>
                    <li>
                        <span class="prop">
                            Fe-
                        </span>
                        <span class="text-black-100">
                            min. from 0.3%
                        </span>
                    </li>
                </ul>
            </div>
            <div class="company_rules">
                <ul>
                    <li>
                        * Commission for transfer to all foreign destinations in Azerbaijani manat - 0%
                    </li>
                    <li>
                        ** It is possible to transfer money via "Zolotaya Korona" system using the UBank application
                    </li>
                    <li>
                        ***It is possible to make a transfer to the bank cards of Ukraine
                    </li>
                </ul>
            </div>
            <button class="submit_btn">
                    Transfer Fees <i class="fa-solid fa-circle-down"></i>
            </button>
        </div>
    </div>
    <div class="company">
        <div class="company_logo">
            <img src="../Assets/company2.webp" alt="">
        </div>
        <div class="company_infos">
            <h1 class="company_name">
                Western Union
            </h1>
            <div class="company_details">
                <ul>
                    <li>
                        <span class="prop">
                            Coverage-
                        </span>
                        <span class="text-black-100">
                            more than 200 countries
                        </span>
                    </li>
                    <li>
                        <span class="prop">
                            Currency- 
                        </span>
                        <span class="text-black-100">
                            USD
                        </span>
                    </li>
                    <li>
                        <span class="prop">
                            Fe-
                        </span>
                        <span class="text-black-100">
                            depends on the country and the amount sent
                        </span>
                    </li>
                </ul>
            </div>
            <div class="company_rules">
                <ul>
                    <li>
                        * Tariff 12 hours:
                    </li>
                    <li>
                        - the maximum amount of 3000 USD
                    </li>
                    <li>
                        - this service is possible only in Moldova and Ukraine
                    </li>
                    <li>
                        -possibility of transfer of funds to a foreign bank account. 
                    </li>
                </ul>
            </div>
            <button class="submit_btn">
                    Transfer Fees <i class="fa-solid fa-circle-down"></i>
            </button>
        </div>
    </div>
    <div class="company">
        <div class="company_logo">
            <img src="../Assets/company3.webp" alt="">
        </div>
        <div class="company_infos">
            <h1 class="company_name">
                Contact
            </h1>
            <div class="company_details">
                <ul>
                    <li>
                        <span class="prop">
                            Coverage-
                        </span>
                        <span class="text-black-100">
                            Azerbaijan, CIS countries and Europe
                        </span>
                    </li>
                    <li>
                        <span class="prop">
                            Currency- 
                        </span>
                        <span class="text-black-100">
                            AZN, USD, EUR and RUB
                        </span>
                    </li>
                    <li>
                        <span class="prop">
                            Fe-
                        </span>
                        <span class="text-black-100">
                            min. from 0.3%
                        </span>
                    </li>
                </ul>
            </div>
            <div class="company_rules">
                <ul>
                    <li>
                        * If the currency of transfer to foreign countries is different from the currency of payment, commission will be - 0%
                    </li>
                    <li>
                        * * Through the "Contact" system it is possible to replenish international bank cards
                    </li>
                    <li>
                        * * * It is possible to send money through the Contact system using UBank 
                    </li>
                </ul>
            </div>
            <button class="submit_btn">
                    Transfer Fees <i class="fa-solid fa-circle-down"></i>
            </button>
        </div>
    </div>`
    })
})


