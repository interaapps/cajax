declare namespace NeoCajax {
	class NeoCajaxRequest {
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

		response(func: void): XMLHttpRequest | NeoCajaxRequest;
		then(func: void): XMLHttpRequest | NeoCajaxRequest;
		catch(func: void): XMLHttpRequest | NeoCajaxRequest;
		custom(func: void): XMLHttpRequest | NeoCajaxRequest;
		send(func: void): NeoCajaxRequest;
	}

	function NeoPrajaxPromise(): Promise<NeoCajaxRequest>;

	export class NeoCajax {
		public static post(
			url: string,
			data: object | string = {},
			options: object = {},
			usinginput: boolean = false
		): NeoCajaxRequest;
		public static get(
			url: string,
			data: object | string = {},
			options: object = {},
			usinginput: boolean = false
		): NeoCajaxRequest;
		public static put(
			url: string,
			data: object | string = {},
			options: object = {},
			usinginput: boolean = false
		): NeoCajaxRequest;
		public static delete(
			url: string,
			data: object | string = {},
			options: object = {},
			usinginput: boolean = false
		): NeoCajaxRequest;
		public static trace(
			url: string,
			data: object | string = {},
			options: object = {},
			usinginput: boolean = false
		): NeoCajaxRequest;
		public static connect(
			url: string,
			data: object | string = {},
			options: object = {},
			usinginput: boolean = false
		): NeoCajaxRequest;
		public static options(
			url: string,
			data: object | string = {},
			options: object = {},
			usinginput: boolean = false
		): NeoCajaxRequest;
		public static ajax(json: object): NeoCajaxRequest;
	}

	export class NeoPrajax {
		public static post(
			url: string,
			data: object | string = {},
			options: object = {},
			usinginput: boolean = false
		): NeoPrajaxPromise;
		public static get(
			url: string,
			data: object | string = {},
			options: object = {},
			usinginput: boolean = false
		): NeoPrajaxPromise;
		public static put(
			url: string,
			data: object | string = {},
			options: object = {},
			usinginput: boolean = false
		): NeoPrajaxPromise;
		public static delete(
			url: string,
			data: object | string = {},
			options: object = {},
			usinginput: boolean = false
		): NeoPrajaxPromise;
		public static trace(
			url: string,
			data: object | string = {},
			options: object = {},
			usinginput: boolean = false
		): NeoPrajaxPromise;
		public static connect(
			url: string,
			data: object | string = {},
			options: object = {},
			usinginput: boolean = false
		): NeoPrajaxPromise;
		public static options(
			url: string,
			data: object | string = {},
			options: object = {},
			usinginput: boolean = false
		): NeoPrajaxPromise;
		public static ajax(json: object): NeoPrajaxPromise;
	}

	export default NeoCajax;
}
