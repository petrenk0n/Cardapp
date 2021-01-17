App = {
    loading: false,
    contracts: {},
  
    load: async () => {
      await App.loadWeb3()
      await App.loadAccount()
      await App.loadContract()
      await App.render()
    },
    // https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8
    loadWeb3: async () => {
      if (typeof web3 !== 'undefined') {
        App.web3Provider = web3.currentProvider
        web3 = new Web3(web3.currentProvider)
      } else {
        window.alert("Please connect to Metamask.")
      }
      // Modern dapp browsers...
      if (window.ethereum) {
        window.web3 = new Web3(ethereum)
        try {
          // Request account access if needed
          await ethereum.enable()
          // Acccounts now exposed
          web3.eth.sendTransaction({/* ... */})
        } catch (error) {
          // User denied account access...
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        App.web3Provider = web3.currentProvider
        window.web3 = new Web3(web3.currentProvider)
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */})
      }
      // Non-dapp browsers...
      else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
      }
    },
  
    loadAccount: async () => {
      // Set the current blockchain account
      App.account = web3.eth.accounts[0]
      console.log(App.account)
    },
  
    loadContract: async () => {
      // Create a JavaScript version of the smart contract
      const carDetails = await $.getJSON('CarDetails.json')
      App.contracts.CarDetails = TruffleContract(carDetails)
      App.contracts.CarDetails.setProvider(App.web3Provider)
  
      // Hydrate the smart contract with values from the blockchain
      App.carDetails = await App.contracts.CarDetails.deployed()
    },
  
    render: async () => {
      // Prevent double render
      if (App.loading) {
        return
      }
  
      // Update app loading state
      App.setLoading(true)
  
      // Render Account
      $('#account').html(App.account)

      // Render car data on dashboard
      await App.renderCars()
  
      // Update loading state
      App.setLoading(false)
    },

    // Render car info
    renderCars: async () => {
        const carCount = await App.carDetails.carCount()
        const $carCard = $('.car-display')
        
        // Car representation
        // id;
        // carModel;
        // vin;
        // mileage;
        // numOfOwners;
        // numOfServiceVisits;
        // numOfReportedAccidents;

        // Retrieve all cars
        for(var i = 1; i<= carCount; i++) {
            const car = await App.carDetails.cars(i)
            const carID = car[0].toNumber()
            const carModel = car[1]
            const carVin = car[2].toNumber()
            const carMiles = car[3].toNumber()
            const carOwners = car[4].toNumber()
            const carServices = car[5].toNumber()
            const carAccidents = car[6].toNumber()

            // $carCard.find('.car-model').html(carModel)  
            // $carCard.find('.car-id').html(carID)  
            // $carCard.find('.car-vin').html(carVin)  
            // $carCard.find('.car-miles').html(carMiles)  
            // $carCard.find('.car-owners').html(carOwners)  
            // $carCard.find('.car-services').html(carServices)  
            // $carCard.find('.car-accidents').html(carAccidents)

            const $newCarCard = $carCard.clone()
            $newCarCard.find('.car-model').html(carModel)
            $newCarCard.find('.car-id').html(carID)  
            $newCarCard.find('.car-vin').html(carVin)  
            $newCarCard.find('.car-miles').html(carMiles)  
            $newCarCard.find('.car-owners').html(carOwners)  
            $newCarCard.find('.car-services').html(carServices)
            $newCarCard.find('.car-accidents').html(carAccidents)
            $('.row-cols-4').append($newCarCard)
            $newCarCard.show()
        }
    },

    addCar: async () => {
        App.setLoading(true)
        const model = $('.model').val()
        const vin = $('.vin').val()
        const miles = $('.miles').val()
        const owners = $('.owners').val()
        const services = $('.services').val()
        const accidents = $('.accidents').val()

        // Parameters for createCar function
        // _model, _vin, _mileage, _numOfOwners, _numOfServiceVisits, _numOfReportedAccidents

        // Create car method
        await App.carDetails.createCar(model, vin, miles, owners, services, accidents)
    },
  
    setLoading: (boolean) => {
      App.loading = boolean
      const loader = $('#loader')
      const content = $('#content')
      if (boolean) {
        loader.show()
        content.hide()
      } else {
        loader.hide()
        content.show()
      }
    }
  }
  
  $(() => {
    $(window).load(() => {
      App.load()
    })
  })

exports = { carCount } 