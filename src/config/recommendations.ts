export interface SecurityRecommendation {
  key: string;
  vendor: string;
  product: string;
  description: string;
}

export const recommendationMapping: Record<string, SecurityRecommendation> = {
  'manufacturing-dlp': {
    key: 'manufacturing-dlp',
    vendor: 'Forcepoint',
    product: 'Forcepoint DLP',
    description: 'Enterprise-grade data loss prevention for manufacturing environments',
  },
  'manufacturing-edr': {
    key: 'manufacturing-edr',
    vendor: 'SentinelOne / Trellix',
    product: 'EDR Protection',
    description: 'Endpoint Detection and Response for manufacturing infrastructure',
  },
  'manufacturing-vuln': {
    key: 'manufacturing-vuln',
    vendor: 'Tenable',
    product: 'Nessus Vulnerability Scanner',
    description: 'Comprehensive vulnerability management for production systems',
  },
  'manufacturing-pam': {
    key: 'manufacturing-pam',
    vendor: 'ARCON',
    product: 'Privileged Access Management',
    description: 'Secure administrative access control for critical systems',
  },
  'healthcare-dlp': {
    key: 'healthcare-dlp',
    vendor: 'Forcepoint',
    product: 'Healthcare Data Protection',
    description: 'HIPAA-compliant data protection for healthcare organizations',
  },
  'healthcare-edr': {
    key: 'healthcare-edr',
    vendor: 'SentinelOne',
    product: 'Hospital Endpoint Security',
    description: 'EDR solution tailored for healthcare security requirements',
  },
  'healthcare-vuln': {
    key: 'healthcare-vuln',
    vendor: 'Tenable',
    product: 'Medical Infrastructure Vulnerability Monitoring',
    description: 'Specialized vulnerability management for medical devices and systems',
  },
  'healthcare-pam': {
    key: 'healthcare-pam',
    vendor: 'ARCON',
    product: 'Secure Administrative Access',
    description: 'PAM solution for healthcare administrative and clinical systems',
  },
};

export const defaultRecommendation: SecurityRecommendation = {
  key: 'default',
  vendor: 'Trellix Security Platform',
  product: 'Recommended OEM Vendor',
  description: 'Enterprise security platform for comprehensive threat protection',
};

export function getRecommendation(
  industry: string,
  securityRequirement: string
): SecurityRecommendation {
  const key = `${industry}-${securityRequirement}`;
  return recommendationMapping[key] || defaultRecommendation;
}
