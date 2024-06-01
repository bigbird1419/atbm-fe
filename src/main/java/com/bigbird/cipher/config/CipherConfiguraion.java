package com.bigbird.cipher.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bigbird.cipher.dto.MalwareDetailDTO;
import com.bigbird.cipher.dto.MalwareDTO;

@Component
public class CipherConfiguraion {
	@Autowired
	private Caesar caesar;

	public MalwareDetailDTO encrypt(MalwareDetailDTO malware) {
		return new MalwareDetailDTO(malware.getId(), caesar.en(malware.getName()), caesar.en(malware.getDescription()),
				caesar.en(malware.getScore()), caesar.en(malware.getInfection()), caesar.en(malware.getPrevention()),
				malware.getCreatedDate(), malware.getUpdateDate());
	}

	public MalwareDTO encrypt(MalwareDTO malware) {
		return new MalwareDTO(malware.getId(), caesar.en(malware.getName()), caesar.en(malware.getDescription()),
				caesar.en(malware.getScore()));
	}

	public MalwareDetailDTO dycrypt(MalwareDetailDTO malware, int key) {
		return new MalwareDetailDTO(malware.getId(), caesar.dy(malware.getName(), key),
				caesar.dy(malware.getDescription(), key), caesar.dy(malware.getScore(), key),
				caesar.dy(malware.getInfection(), key), caesar.dy(malware.getPrevention(), key),
				malware.getCreatedDate(), malware.getUpdateDate());
	}

	public MalwareDTO dycrypt(MalwareDTO malware, int key) {
		return new MalwareDTO(malware.getId(), caesar.dy(malware.getName(), key),
				caesar.dy(malware.getDescription(), key), caesar.dy(malware.getScore(), key));
	}
}