declare namespace Cajax {
	class CajaxRequest {
		xhr: XMLHttpRequest;
		method: string;
		contenttype: string;
		data: object | string;

		contstructor(
			url: string,
			method: string,
			data: object | string = null,
			options: object = null
		): void;

		response(func: void): XMLHttpRequest | CajaxRequest;
		then(func: void): XMLHttpRequest | CajaxRequest;
		catch(func: void): XMLHttpRequest | CajaxRequest;
		custom(func: void): XMLHttpRequest | CajaxRequest;
		send(func: void): CajaxRequest;
	}

	function PrajaxPromise(): Promise<CajaxRequest>;

	export class Cajax {
		public static post(
			url: string,
			data: object | string = {},
			options: object = {},
			usinginput: boolean = false
		): CajaxRequest;
		public static get(
			url: string,
			data: object | string = {},
			options: object = {},
			usinginput: boolean = false
		): CajaxRequest;
		public static put(
			url: string,
			data: object | string = {},
			options: object = {},
			usinginput: boolean = false
		): CajaxRequest;
		public static delete(
			url: string,
			data: object | string = {},
			options: object = {},
			usinginput: boolean = false
		): CajaxRequest;
		public static trace(
			url: string,
			data: object | string = {},
			options: object = {},
			usinginput: boolean = false
		): CajaxRequest;
		public static connect(
			url: string,
			data: object | string = {},
			options: object = {},
			usinginput: boolean = false
		): CajaxRequest;
		public static options(
			url: string,
			data: object | string = {},
			options: object = {},
			usinginput: boolean = false
		): CajaxRequest;
		public static ajax(json: object): CajaxRequest;
	}

	export class Prajax {
		public static post(
			url: string,
			data: object | string = {},
			options: object = {},
			usinginput: boolean = false
		): PrajaxPromise;
		public static get(
			url: string,
			data: object | string = {},
			options: object = {},
			usinginput: boolean = false
		): PrajaxPromise;
		public static put(
			url: string,
			data: object | string = {},
			options: object = {},
			usinginput: boolean = false
		): PrajaxPromise;
		public static delete(
			url: string,
			data: object | string = {},
			options: object = {},
			usinginput: boolean = false
		): PrajaxPromise;
		public static trace(
			url: string,
			data: object | string = {},
			options: object = {},
			usinginput: boolean = false
		): PrajaxPromise;
		public static connect(
			url: string,
			data: object | string = {},
			options: object = {},
			usinginput: boolean = false
		): PrajaxPromise;
		public static options(
			url: string,
			data: object | string = {},
			options: object = {},
			usinginput: boolean = false
		): PrajaxPromise;
		public static ajax(json: object): PrajaxPromise;
	}

	export default Cajax;
}
