import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor() {
        this._types = [
            {id: 1, name: "ice"},
            {id: 2, name: "smartphone"}
        ]
        this._brands = [
            {id: 1, name: "samsung"},
            {id: 2, name: "apple"}
        ]
        this._devices = [
            {id: 1, name: "iphone 11 pro", price: 10, rating: 3, img:"https://img1.goodfon.com/original/4266x3072/e/e6/zhivotnoe-kot-bolshie-glaza.jpg"},
            {id: 2, name: "iphone 12 pro", price: 20, rating: 4, img:"https://img1.goodfon.com/original/4266x3072/e/e6/zhivotnoe-kot-bolshie-glaza.jpg"}
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setDevices(devices){
        this._devices = devices
    }

    setSelectedType(type){
        this._selectedType = type
    }

    setSelectedBrand(brand){
        this._selectedBrand = brand
    }

    get types(){
        return this._types
    }

    get brands(){
        return this._brands
    }

    get devices(){
        return this._devices
    }

    get selectedType(){
        return this._selectedType
    }

    get selectedBrand(){
        return this._selectedBrand
    }
}