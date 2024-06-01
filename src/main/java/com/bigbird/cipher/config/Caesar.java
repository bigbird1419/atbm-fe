package com.bigbird.cipher.config;

import org.springframework.stereotype.Component;

@Component
public class Caesar {
	private final int K = 9;
	char[] viet = { 'a', 'á', 'à', 'ả', 'ã', 'ạ', 'ă', 'ắ', 'ằ', 'ẳ', 'ẵ', 'ặ', 'â', 'ấ', 'ầ', 'ẩ', 'ẫ', 'ậ', 'b', 'c',
			'd', 'đ', 'e', 'é', 'è', 'ẻ', 'ẽ', 'ẹ', 'ê', 'ế', 'ề', 'ể', 'ễ', 'ệ', 'g', 'h', 'i', 'í', 'ì', 'ỉ', 'ĩ',
			'ị', 'j', 'k', 'l', 'm', 'n', 'o', 'ó', 'ò', 'ỏ', 'õ', 'ọ', 'ô', 'ố', 'ồ', 'ổ', 'ỗ', 'ộ', 'ơ', 'ớ', 'ờ',
			'ở', 'ỡ', 'ợ', 'p', 'q', 'r', 's', 't', 'u', 'ú', 'ù', 'ủ', 'ũ', 'ụ', 'ư', 'ứ', 'ừ', 'ử', 'ữ', 'ự', 'v',
			'x', 'y', 'ý', 'ỳ', 'ỷ', 'ỹ', 'ỵ', 'w', 'z', 'A', 'Á', 'À', 'Ả', 'Ã', 'Ạ', 'Ă', 'Ắ', 'Ằ', 'Ẳ', 'Ẵ', 'Ặ',
			'Â', 'Ấ', 'Ầ', 'Ẩ', 'Ẫ', 'Ậ', 'B', 'C', 'D', 'Đ', 'E', 'É', 'È', 'Ẻ', 'Ẽ', 'Ẹ', 'Ê', 'Ế', 'Ề', 'Ể', 'Ễ',
			'Ệ', 'G', 'H', 'I', 'Í', 'Ì', 'Ỉ', 'Ĩ', 'Ị', 'J', 'K', 'L', 'M', 'N', 'O', 'Ó', 'Ò', 'Ỏ', 'Õ', 'Ọ', 'Ô',
			'Ố', 'Ồ', 'Ổ', 'Ỗ', 'Ộ', 'Ơ', 'Ớ', 'Ờ', 'Ở', 'Ỡ', 'Ợ', 'P', 'Q', 'R', 'S', 'T', 'U', 'Ú', 'Ù', 'Ủ', 'Ũ',
			'Ụ', 'Ư', 'Ứ', 'Ừ', 'Ử', 'Ữ', 'Ự', 'V', 'X', 'Y', 'Ý', 'Ỳ', 'Ỷ', 'Ỹ', 'Ỵ', 'W', 'Z', ' ', '+', '-', '*',
			'/', '>', '=', '<', '?', '!', '(', ')', '@', ',', '.', '_', '`', '~', '$', '%', '^', '&', '[', ']', '{',
			'}', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' };

	public String en(String text) {
		StringBuilder rs = new StringBuilder();
		for (int i = 0; i < text.length(); i++) {
			char c = text.charAt(i);
			if (Character.isWhitespace(c)) {
				rs.append(c);
			} else {
				int index = findIndexOfLetter(c);
				if (index != -1) {
					int newIndex = (index + K) % viet.length;
					rs.append(viet[newIndex]);
				}
			}
		}
		return rs.toString();
	}

	public String dy(String text, int k) {
		StringBuilder rs = new StringBuilder();
		for (int i = 0; i < text.length(); i++) {
			char c = text.charAt(i);
			if (Character.isWhitespace(c)) {
				rs.append(c);
			} else {
				int index = findIndexOfLetter(c);
				if (index != -1) {
					int newIndex = (index - k + viet.length) % viet.length;
					rs.append(viet[newIndex]);
				}
			}
		}
		return rs.toString();
	}

	private int findIndexOfLetter(char c) {
		for (int i = 0; i < viet.length; i++) {
			if (viet[i] == c) {
				return i;
			}
		}
		return -1;
	}
}